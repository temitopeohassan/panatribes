"use server";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

export async function initializeTransaction(data: {
  email: string;
  amount: number;
  metadata?: any;
  callback_url?: string;
}) {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error("PAYSTACK_SECRET_KEY is not defined in environment variables");
  }

  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      amount: data.amount * 100, // Convert to kobo (₦100 = 10000)
    }),
  });

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message || "Failed to initialize transaction");
  }

  return result.data;
}

export async function verifyTransaction(reference: string) {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error("PAYSTACK_SECRET_KEY is not defined in environment variables");
  }

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    },
  });

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message || "Failed to verify transaction");
  }

  return result.data;
}

export async function listTransactions(params: { perPage?: number; page?: number } = {}) {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error("PAYSTACK_SECRET_KEY is not defined in environment variables");
  }

  const query = new URLSearchParams(params as any).toString();
  const response = await fetch(`https://api.paystack.co/transaction?${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
    },
  });

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message || "Failed to list transactions");
  }

  return result.data;
}

export async function chargeAuthorization(data: {
  authorization_code: string;
  email: string;
  amount: number;
}) {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error("PAYSTACK_SECRET_KEY is not defined in environment variables");
  }

  const response = await fetch("https://api.paystack.co/transaction/charge_authorization", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      amount: data.amount * 100, // Convert to kobo
    }),
  });

  const result = await response.json();

  if (!result.status) {
    throw new Error(result.message || "Failed to charge authorization");
  }

  return result.data;
}

