import { useState } from "react"
import Button from "../../../../ui/button/Button.jsx"
import styles from "./new-invoice.module.css"
import { useForm, useWatch } from "react-hook-form"

function NewInvoiceForm() {
    const [itemList, setItemList] = useState([]);
    const {register, handleSubmit, getValues} = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        
    }

    const handleInputChange = (e, index) => {
        let { name, value } = e.target;
        const updatedItemList = [...itemList];
        updatedItemList[index][name.match(/item\.\d+\.(.+)/)[1]] = value;

        const quantity = updatedItemList[index].quantity || 0;
        const unitPrice = updatedItemList[index].unitPrice || 0;
        updatedItemList[index].total = quantity * unitPrice;
      
        setItemList(updatedItemList);
    }

    const handleDelete = (e, index) => {
        setItemList(itemList.filter((item, i) => i !== index));
    }

    return (
        <form className={styles.newInvoiceForm} onSubmit={handleSubmit(onSubmit)}>
            <h1>New Invoice</h1>

            <div>
                <h3>Bill From</h3>
                <div>
                    <label htmlFor="">Street Address</label>
                    <input type="text" name="billFromStreetAddress"/>
                </div>
                <div className={styles.CPC}>
                    <div>
                        <label htmlFor="">City</label>
                        <input type="text" name="billFromCity"/>
                    </div>
                    <div>
                        <label htmlFor="">Post Code</label>
                        <input type="text" name="billFromPostCode"/>
                    </div>
                    <div>
                        <label htmlFor="">Country</label>
                        <input type="text" name="billFromCountry"/>
                    </div>
                </div>
            </div>

            <div>
                <h3>Bill To</h3>
                <div>
                    <label htmlFor="">Client's Name</label>
                    <input type="text" name="clientName" />
                </div>
                <div>
                    <label htmlFor="">Client's Email</label>
                    <input type="text" name="clientEmail" />
                </div>
                <div>
                    <label htmlFor="">Street Address</label>
                    <input type="text" name="billToStreetAddress"/>
                </div>
                <div className={styles.CPC}>
                    <div>
                        <label htmlFor="">City</label>
                        <input type="text" name="billToCity"/>
                    </div>
                    <div>
                        <label htmlFor="">Post Code</label>
                        <input type="text" name="billToPostCode"/>
                    </div>
                    <div>
                        <label htmlFor="">Country</label>
                        <input type="text" name="billToCountry"/>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.terms}>
                    <div>
                        <label htmlFor="">Invoice date</label>
                        <input type="text" name="invoiceDate"/>
                    </div>
                    <div>
                        <label htmlFor="">Payment Terms</label>
                        <input type="text" name="paymentterms"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Project Description</label>
                    <input type="text" name="projectDescription"/>
                </div>
            </div>

            <div className={styles.itemList}>
                <h2>Item List</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>QTY.</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList.length > 0 ? itemList.map((item, index) => {
                                return <tr key={index}>
                                    <td><input {...register(`item.${index}.name`)}onChange={(e) => handleInputChange(e, index)}/></td>
                                    <td><input {...register(`item.${index}.quantity`)} onChange={(e) => handleInputChange(e, index)}/></td>
                                    <td><input {...register(`item.${index}.unitPrice`)} onChange={(e) => handleInputChange(e, index)}/></td>
                                    <td>{item.total || 0}</td>
                                    <td className={styles.deleteItem} onClick={(e) => handleDelete(e, index)}></td>
                                </tr>
                            }) : null}
                            {itemList.length > 0 
                            ? <tr>
                                <td>Amount Due</td>
                                <td></td>
                                <td></td>
                                <td>{itemList && itemList.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</td>
                            </tr>
                            : null}
                        </tbody>
                    </table>
                    <Button className="addItem" text="Add Item" onClick={() => setItemList([...itemList, { name: '', quantity: 0, unitPrice: 0, total: 0 }])}/>
                </div>
            </div>
        </form>
    )
}

export default NewInvoiceForm