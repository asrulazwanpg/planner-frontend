import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { MdClose } from "react-icons/md";

function ItemIcon(props) {
    return props.value ? <FaCheck /> : <MdClose />
}

function PlanComponent(props) {
    const plan = props.plan;

    return (
        <div className='plan-item'>
            <div className='item-title'>{plan.name}</div>
            <div className='item-check'>{<ItemIcon value={plan.isGeneral} />}</div>
            <div className='item-check'>{<ItemIcon value={plan.isSpecialist} />}</div>
            <div className='item-check'>{<ItemIcon value={plan.isPhysiotheraphy} />}</div>
        </div>
    );
}

export default PlanComponent;
