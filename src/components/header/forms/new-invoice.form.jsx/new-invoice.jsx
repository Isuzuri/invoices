import { useState } from "react"
import Button from "../../../../ui/button/Button.jsx"
import styles from "./new-invoice.module.css"
import { useForm } from "react-hook-form"
import { InvoiceService } from "../../../../services/invoice.service.jsx";

function NewInvoiceForm() {
    const [itemList, setItemList] = useState([]);
    const {register, handleSubmit} = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        const items = itemList
        if(!items.length) return;
        InvoiceService.addInvoice(data, items)
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
        <form className={styles.newInvoiceForm}>
            <h1>New Invoice</h1>

            <div>
                <h3>Bill From</h3>
                <div>
                    <label htmlFor="">Street Address</label>
                    <input {...register("billFromStreetAddress", {required: true})} type="text" name="billFromStreetAddress"/>
                </div>
                <div className={styles.CPC}>
                    <div>
                        <label htmlFor="">City</label>
                        <input {...register("billFromCity", {required: true})} type="text" name="billFromCity"/>
                    </div>
                    <div>
                        <label htmlFor="">Post Code</label>
                        <input {...register("billFromPostCode", {required: true})} type="text" name="billFromPostCode"/>
                    </div>
                    <div>
                        <label htmlFor="">Country</label>
                        <input {...register("billFromCountry", {required: true})} type="text" name="billFromCountry"/>
                    </div>
                </div>
            </div>

            <div>
                <h3>Bill To</h3>
                <div>
                    <label htmlFor="">Client's Name</label>
                    <input {...register("clientName", {required: true})} type="text" name="clientName" />
                </div>
                <div>
                    <label htmlFor="">Client's Email</label>
                    <input {...register("clientEmail", {required: true})} type="text" name="clientEmail" />
                </div>
                <div>
                    <label htmlFor="">Street Address</label>
                    <input {...register("billToStreetAddress", {required: true})} type="text" name="billToStreetAddress"/>
                </div>
                <div className={styles.CPC}>
                    <div>
                        <label htmlFor="">City</label>
                        <input {...register("billToCity", {required: true})} type="text" name="billToCity"/>
                    </div>
                    <div>
                        <label htmlFor="">Post Code</label>
                        <input {...register("billToPostCode", {required: true})} type="text" name="billToPostCode"/>
                    </div>
                    <div>
                        <label htmlFor="">Country</label>
                        <input {...register("billToCountry", {required: true})} type="text" name="billToCountry"/>
                    </div>
                </div>
            </div>

            <div>
                <div className={styles.terms}>
                    <div>
                        <label htmlFor="">Invoice date</label>
                        <input {...register("invoiceDate", {required: true})} type="date" name="invoiceDate"/>
                    </div>
                    <div>
                        <label htmlFor="">Payment Terms</label>
                        <select {...register("paymentTerms", {required: true})} type="text" name="paymentTerms">
                            <option value="30 days">30 days</option>
                            <option value="60 days">60 days</option>
                            <option value="90 days">90 days</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="">Project Description</label>
                    <input {...register("projectDescription", {required: true})} type="text" name="projectDescription"/>
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
                                    <td><input {...register(`item.${index}.name`, {required: true})} onChange={(e) => handleInputChange(e, index)}/></td>
                                    <td><input {...register(`item.${index}.quantity`, {required: true})} onChange={(e) => handleInputChange(e, index)} type="number"/></td>
                                    <td><input {...register(`item.${index}.unitPrice`, {required: true})} onChange={(e) => handleInputChange(e, index)} type="number"/></td>
                                    <td>{item.total || 0}</td>
                                    <td className={styles.deleteItem} onClick={(e) => handleDelete(e, index)}></td>
                                </tr>
                            }) : <tr><td></td><td></td><td></td><td></td><td></td></tr> }
                        </tbody>
                    </table>
                    <Button className="addItem" text="Add Item" onClick={(event) => {
                        event.preventDefault();
                        setItemList([...itemList, { name: '', quantity: 0, unitPrice: 0, total: 0 }])}
                    }/>
                </div>
            </div>
            <div className={styles.controlButtons}>
                <Button className="discard" text="Discard"/>
                <Button className="newInvoice" text="Save" onClick={handleSubmit(onSubmit)}/>
            </div>
        </form>
    )
}

export default NewInvoiceForm