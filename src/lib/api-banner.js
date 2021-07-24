const FIREBASE_DOMAIN = 'https://my-portal-dc63a-default-rtdb.firebaseio.com/';

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/banners.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch banners.');
  }

  const transformedQuotes = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/banners/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/banners.json`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}


