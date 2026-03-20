import React from "react";

function Child(props) {
  const { id, name, price, description, onSale } = props.product;
  const { deleteProduct } = props;
  const { updateProduct } = props;

  return (
    <section className="p-2 relative border bg-gray-200 border-gray-400 rounded m-2 text-lg">
      <div>
        <h2 className="font-bold text-md">Name: {name}</h2>
        <p className="text-sky-600">Price: {price} $</p>
        <p className="text-gray-600 text-sm">Description: {description}</p>
        {onSale ? (
          <div className="absolute top-0 right-0 text-sm bg-red-500 text-white p-1">
            On Sale
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-between mt-5">
          <button
            onClick={() => deleteProduct(id)}
            className="bg-red-600 p-2 cursor-pointer text-white rounded-lg text-sm"
          >
            Delete
          </button>
          <button
            onClick={() => updateProduct(id)}
            className="bg-sky-600 p-2 cursor-pointer text-white rounded-lg text-sm"
          >
            Update
          </button>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Child);
