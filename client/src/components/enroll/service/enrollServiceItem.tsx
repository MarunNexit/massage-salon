import React from "react";
import ServiceItem from "../../services/ServiceItem.tsx";

interface EnrollServiceItemProps {
    _id: string;
    name: string;
    duration: number;
    price: number;
    description: string;
    isDrawer: boolean;
    onSelect?: (id: string, name: string) => void;
}

const EnrollServiceItem: React.FC<EnrollServiceItemProps> = (props) => {
    const handleClick = () => {
        if (props.onSelect) {
            console.log(props._id)
            props.onSelect(props._id, props.name); // Викликаємо onSelect, передаючи id
        }
    };

    return (
        <section onClick={handleClick}>
            <ServiceItem _id={props._id} name={props.name} duration={props.duration} description={props.description} price={props.price} isDrawer={props.isDrawer} />
        </section>
    )
}


export default EnrollServiceItem;
