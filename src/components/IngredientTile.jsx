export function IngredientTile({ text, quantity, image }) {
  return (
    <div className="flex mt-5 border-gray-100 border-2">
      <img className="w-20 h-20" alt="ingredient" src={image} />
      <div className="flex-grow p-2 flex flex-col justify-between">
        <div>{text}</div>
        <div className="font-light text-sm">Quantity <span>{quantity}</span></div>
      </div>
    </div>
  );
}
