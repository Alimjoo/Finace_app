function CalculateSingleESG(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get('name');
  const select = formData.get('select');
  return [name, select];
}