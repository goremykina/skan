import './style.sass'
import PropTypes from "prop-types";
import arrow from "../../icons/arrow.png";
import { useEffect, useState } from "react";

Slider.propTypes = {
    cards:  PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        text: PropTypes.string
    })),
    maxVisible: PropTypes.number
}

// export default function Slider({ cards, maxVisible }) {
//     const [offset, setOffset] = useState(0);
//     const [cardsProxy, setCardsProxy] = useState([]);
//     const [visibleCards, setVisibleCards] = useState([]);
//
//     useEffect(() => {
//         const proxy = new Proxy(cards, {
//             get(original, prop) {
//                 const originalIndex = Number(prop);
//                 if (isNaN(originalIndex)) {
//                     return original[prop];
//                 }
//
//                 const unoverflowedIndex = originalIndex % original.length;
//                 const positiveIndex = unoverflowedIndex < 0
//                     ? unoverflowedIndex + original.length
//                     : unoverflowedIndex;
//
//                 return original[positiveIndex];
//             }
//         });
//         setCardsProxy(proxy);
//     }, [cards]);
//
//     useEffect(() => {
//         if (!cardsProxy.length) {
//             return;
//         }
//
//         const visibleCards = [];
//         for (let i = 0; i < maxVisible; ++i) {
//             visibleCards.push(cardsProxy[offset + i]);
//         }
//
//         setVisibleCards(visibleCards);
//     }, [offset, maxVisible, cardsProxy]);
//
//     const handlePrevCard = () => {
//         setOffset(offset - 1);
//     }
//
//     const handleNextCard = () => {
//         setOffset(offset + 1);
//     }
//
//     return (
//         <div className='cards_wrapper'>
//             <button className='button_arrow' onClick={handlePrevCard}>{<img className='arrow' src={arrow} alt='arrow' />}</button>
//             <div className='cards_container'>
//                 {visibleCards.map((card, index) => (
//                     <div key={index} className='card'>
//                         <img
//                             key={index}
//                             alt={card.alt}
//                             src={card.src}
//                             className='cards_img'
//                         ></img>
//                         <p>{card.text}</p>
//                     </div>
//                 ))}
//             </div>
//             <button className='button_arrow' onClick={handleNextCard}>{<img className='arrow right' src={arrow} alt='arrow' />}</button>
//         </div>
//     )
// }

export default function Slider({ cards, maxVisible }) {
    const [offset, setOffset] = useState(0);
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const end = Math.min(cards.length, offset + maxVisible);
        const visibleCards = cards.slice(offset, end);

        const numberOfMissed = maxVisible - visibleCards.length;
        if (numberOfMissed > 0) {
            const missedCards = cards.slice(0, numberOfMissed);
            visibleCards.push(...missedCards);
        }

        setVisibleCards(visibleCards);
    }, [cards, maxVisible, offset]);

    const handlePrevCard = () => {
        if (offset > 0) {
            setOffset(offset - 1);
        } else {
            setOffset(cards.length - 1);
        }
    }

    const handleNextCard = () => {
        if (offset === cards.length) {
            setOffset(0);
        } else {
            setOffset(offset + 1)
        }
    }

    return (
    <div className='cards_wrapper'>
        <button className='button_arrow' onClick={handlePrevCard}>{<img className='arrow' src={arrow} alt='arrow' />}</button>
        <div className='cards_container'>
            {visibleCards.map((card, index) => (
                <div key={index} className='card'>
                    <img
                        key={index}
                        alt={card.alt}
                        src={card.src}
                        className='cards_img'
                    ></img>
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
        <button className='button_arrow' onClick={handleNextCard}>{<img className='arrow right' src={arrow} alt='arrow' />}</button>
    </div>
    )
}