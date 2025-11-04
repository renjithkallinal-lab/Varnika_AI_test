fetch(`${process.env.NEXT_PUBLIC_COLAB_API_URL}/api/generate`, {
  method: "POST",
  body: JSON.stringify({ prompt }),
});
