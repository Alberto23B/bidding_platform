interface InputData {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
  steps: number;
}

export default async function getBid(url: string, request: InputData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      alert('An error occured during the request');
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
