import React from 'react';

interface IInput {
    type: string,
    name: string,
    id?: string,
    title?: string,
    labeled?: boolean
}

const Input = (props: IInput) => {

    const type: string = props.type;
    const name: string = props.name;
    const id: string = props.id;

    const labeled: boolean = props.labeled !== undefined? props.labeled : true;
    const title: string = props.title ? props.title : props.name;


    const Label = labeled ? <label htmlFor={id}>{title}</label> : <></>;

    return (
        <div>
            {Label}
            <input type={type} name={name} id={id} />
        </div>
    )
}

export default class Form extends React.Component {

    render() {
        return (
            <form>
                {this.props.inputs.map((singleInput, inputIndex) => {

                    const newId : string = singleInput.id ? singleInput.id : 'input_' + inputIndex;

                    singleInput.id = newId;

                    return (
                        <Input 
                            name={singleInput.name} 
                            type={singleInput.type} 
                            id={singleInput.id} 
                            labeled={singleInput.labeled} 
                            title={singleInput.title} 
                        />
                    );
                })}
            </form>
        )
    }
}