import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cart/CartContextProvider";
import React, { useEffect, useState } from "react";
import "./Order.css";

const OrderPage = () => {
  const nav = useNavigate();
  const { clearCart } = useCartContext();

  const [namePerson, setNamePerson] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [cvv, setCvv] = useState('');

  const handleBuyButtonClick = () => {
    clearCart();
    nav("/shop");
  };

  return (
    <div>
      <div className="card">
        <div className="card__side card__side_front">
          <div className="flex__1">
            <p className="card__side__name-bank">monobank</p>
            <div className="card__side__chip"></div>
            <p className="card__side__name-person">{namePerson || 'PAVLO MATVIIENKO'}</p>
          </div>
        </div>
        <div className="card__side card__side_back">
          <div className="card__side__black"></div>
          <p className="card__side__number">{creditCard || 'XXXX XXXX XXXX XXXX'}</p>
          <div className="flex__2">
            <p className="card__side__other-numbers card__side__other-numbers_1">
              XX/XX
            </p>
            <p className="card__side__other-numbers card__side__other-numbers_2">
              {cvv || 'XXX'}
            </p>
            <div className="card__side__photo">your-photo</div>
            <div className="card__side__debit">debit</div>
          </div>
          <p className="card__side__other-info">
            MONOBANK.UA | 0 800 205 205 | АТ "УНІВЕРСАЛ БАНК". ЛІЦЕНЗІЯ НБУ №92
            ВІД 20.01.1994 | PCE PC100650 WORLD DEBIT
          </p>
        </div>
      </div>
      <div className="max-w-[360px] w-full mx-auto bg-[#eceaf2] text-gray-900 rounded-lg shadow-md p-4">
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-gray-900"> Name Person</label>
            <input
              placeholder="Name person"
              className="w-full p-2 border-b-2 border-purple-600 bg-transparent outline-none focus:border-b-2 focus:border-blue-500"
              type="text"
              value={namePerson}
              onChange={(e) => setNamePerson(e.target.value)}

            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-900"> Your Credit Card </label>
            <input
              placeholder="Your Credit Card"
              className="w-full p-2 border-b-2 border-purple-600 bg-transparent outline-none focus:border-b-2 focus:border-blue-500"
              name="number"
              id="creditCard"
              type="text"
              value={creditCard}
              onChange={(e) => setCreditCard(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-900"> CVV </label>
            <input
              placeholder="CVV"
              className="w-full p-2 border-b-2 border-purple-600 bg-transparent outline-none focus:border-b-2 focus:border-blue-500"
              name="cvv"
              id="cvv"
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              onClick={() => handleBuyButtonClick()}
              className="w-full bg-[#57347a] text-gray-900 font-semibold p-2 rounded transition-all hover:bg-[#34309e]"
              type="submit"
            >
              pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
