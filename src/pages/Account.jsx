import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ACCOUNT_NAV } from '../data/accountNav';

const Account = () => {
  const { user, logout, fetchCustomerProfile, updateCustomer, fetchUserOrders, showToast } = useShop();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'dashboard';
  const setActiveTab = (tab) => setSearchParams(tab === 'dashboard' ? {} : { tab });
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [profile, setProfile] = useState(null);
  const [editingAddress, setEditingAddress] = useState(false);
  const [formData, setFormData] = useState({
    billing: {
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      phone: ''
    }
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadData = async () => {
      try {
        setLoading(true);
        const [profileData, ordersData] = await Promise.all([
          fetchCustomerProfile(user.id),
          fetchUserOrders(user.id)
        ]);
        setProfile(profileData);
        setOrders(ordersData);
        setFormData({
          billing: {
            first_name: profileData.billing.first_name || profileData.first_name,
            last_name: profileData.billing.last_name || profileData.last_name,
            address_1: profileData.billing.address_1 || '',
            city: profileData.billing.city || '',
            phone: profileData.billing.phone || ''
          }
        });
      } catch (err) {
        console.error('Error loading account data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
    showToast('Logged out successfully');
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateCustomer(user.id, { billing: formData.billing });
      showToast('Address updated successfully', 'success');
      setEditingAddress(false);
    } catch (err) {
      showToast('Failed to update address', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="spinner"></div>
        <p style={{ marginLeft: 20 }}>Loading your account...</p>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
          <h1 className="page-hero-title">My Account</h1>
          <p className="section-sub">Manage your profile and track your orders</p>
        </div>

        <div className="account-layout">
          <aside className="account-menu">
            <div className="account-profile">
              <div className="account-avatar">
                {user?.firstName?.charAt(0) || 'U'}
              </div>
              <div className="account-name">{user?.firstName} {user?.lastName}</div>
              <div className="account-email">{user?.email}</div>
            </div>
            <nav>
              {ACCOUNT_NAV.map((item) => (
                <button
                  key={item.tab}
                  className={`account-nav-link ${activeTab === item.tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.tab)}
                >
                  {item.icon} {item.label}
                </button>
              ))}
              <button className="account-nav-link" onClick={handleLogout} style={{ color: 'var(--danger)' }}>
                🚪 Logout
              </button>
            </nav>
          </aside>

          <main className="account-content">
            {activeTab === 'dashboard' && (
              <div className="animate-fade-in">
                <h2 style={{ marginBottom: 24 }}>Hello, {user?.firstName}!</h2>
                <p className="muted" style={{ marginBottom: 32 }}>
                  From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </p>
                <div className="promo-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  <div className="stat-card" onClick={() => setActiveTab('orders')} style={{ cursor: 'pointer' }}>
                    <div className="stat-icon">📦</div>
                    <div>
                      <div className="stat-value">{orders.length}</div>
                      <div className="stat-label">Total Orders</div>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon">💳</div>
                    <div>
                      <div className="stat-value">₦{orders.reduce((sum, o) => sum + parseFloat(o.total), 0).toLocaleString()}</div>
                      <div className="stat-label">Total Spent</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="animate-fade-in">
                <h2 style={{ marginBottom: 24 }}>Order History</h2>
                {orders.length > 0 ? (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
                          <th style={{ padding: '12px 8px' }}>Order</th>
                          <th style={{ padding: '12px 8px' }}>Date</th>
                          <th style={{ padding: '12px 8px' }}>Status</th>
                          <th style={{ padding: '12px 8px' }}>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id} style={{ borderBottom: '1px solid var(--border)' }}>
                            <td style={{ padding: '16px 8px', fontWeight: '600' }}>#{order.id}</td>
                            <td style={{ padding: '16px 8px' }}>{new Date(order.date_created).toLocaleDateString()}</td>
                            <td style={{ padding: '16px 8px' }}>
                              <span className={`badge ${order.status === 'completed' ? 'success' : (order.status === 'cancelled' ? 'sale' : 'hot')}`}>
                                {order.status}
                              </span>
                            </td>
                            <td style={{ padding: '16px 8px', fontWeight: '700' }}>₦{parseFloat(order.total).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <p className="muted">You haven't placed any orders yet.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/shop')} style={{ marginTop: 20 }}>Start Shopping</button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'address' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <h2>Billing Address</h2>
                  {!editingAddress && (
                    <button className="btn btn-outline" onClick={() => setEditingAddress(true)}>Edit</button>
                  )}
                </div>

                {editingAddress ? (
                  <form onSubmit={handleUpdateProfile}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.billing.first_name}
                          onChange={(e) => setFormData({...formData, billing: {...formData.billing, first_name: e.target.value}})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.billing.last_name}
                          onChange={(e) => setFormData({...formData, billing: {...formData.billing, last_name: e.target.value}})}
                          required
                        />
                      </div>
                      <div className="form-group full">
                        <label className="form-label">Street Address</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.billing.address_1}
                          onChange={(e) => setFormData({...formData, billing: {...formData.billing, address_1: e.target.value}})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">City</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={formData.billing.city}
                          onChange={(e) => setFormData({...formData, billing: {...formData.billing, city: e.target.value}})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          value={formData.billing.phone}
                          onChange={(e) => setFormData({...formData, billing: {...formData.billing, phone: e.target.value}})}
                          required
                        />
                      </div>
                    </div>
                    <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                      <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Address'}
                      </button>
                      <button type="button" className="btn btn-outline" onClick={() => setEditingAddress(false)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{profile?.billing?.first_name} {profile?.billing?.last_name}</div>
                    <div>{profile?.billing?.address_1 || 'No address set yet.'}</div>
                    <div>{profile?.billing?.city}</div>
                    <div>{profile?.billing?.phone}</div>
                    <div style={{ color: 'var(--muted)', marginTop: 8 }}>{profile?.email}</div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Account;
