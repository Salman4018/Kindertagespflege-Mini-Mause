export async function submitEnquiry(endpoint: string, data: FormData): Promise<void> {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: data,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
}
