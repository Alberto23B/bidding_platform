interface InputData {
  base: number;
  minStep: number;
  maxStep: number;
  threshold: number;
  steps: number;
}

export default async function getBid(url: string, request: InputData) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  console.log(JSON.stringify(request));

  const data = await response.json();

  return data;
}
