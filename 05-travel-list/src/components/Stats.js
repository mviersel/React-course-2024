export default function Stats({ items }) {
    if (!items.length) return (
        <p className="stats">
            <em>Start adding some items to your packing list
            </em>
        </p>
    )

    const numItems = items.length;
    const numPacketItems = items.filter(item => item.packed).length;
    const percentagePacked = Math.round(numPacketItems / numItems * 100);

    return (
        <footer className="stats">
            <em>{percentagePacked === 100 ? "You got everything ready to go! ✈️" :
                `💼 You have ${numItems} items on your list, and you already packed ${numPacketItems} (${percentagePacked}%)`
            }
            </em>
        </footer>
    );
}