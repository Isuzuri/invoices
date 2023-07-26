import React from 'react';
import styles from './main-info.module.css';
import InvoiceId from '../../invoice-list/invoice-item/invoice-id.jsx';

function MainInfo({invoice}) {
    const paymentDue = getLastDate(invoice.issueDate, invoice.paymentTerms);
    const billTo = invoice.billTo && Object.keys(invoice.billTo).filter(item => item !== 'clientEmail').map((item, index) => {
        if (item === 'clientName') {
            return <div key={index} className='head-S'>{invoice.billTo[item]}</div>
        } else return <div key={index}>{invoice.billTo[item]}</div>
        });

    return (
        <div className={styles.mainInfo}>
            <div className={styles.heading}>
                <div>
                    <InvoiceId id={invoice.id}/>
                    <div>{invoice.projectDescription}</div>
                </div>
                <div>{invoice.billFrom && Object.keys(invoice.billFrom).map((item, index) => <div key={index}>{invoice.billFrom[item]}</div>)}</div>    
            </div>

            <div className={styles.info}>
                <div>
                    <div>
                        <h3>Invoice Date</h3>
                        <div className='head-S'>{invoice.issueDate}</div>
                    </div>
                    <div>
                        <h3>Payment Due</h3>
                        <div className='head-S'>{paymentDue}</div>
                    </div>
                </div>

                <div>
                    <h3>Bill To</h3>
                    <div>{billTo}</div>
                </div>
                
                <div>
                    <h3>Sent To</h3>
                    <div className='head-S'>{invoice.billTo && invoice.billTo.clientEmail}</div>
                </div>
            </div>

            <div className={styles.itemList}>
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
                        {invoice.itemList && invoice.itemList.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.unitPrice * item.quantity}</td>
                            </tr>
                        })}
                        <tr>
                            <td>Amount Due</td>
                            <td></td>
                            <td></td>
                            <td>{invoice.itemList && invoice.itemList.reduce((total, item) => total + item.unitPrice * item.quantity, 0)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const getLastDate = (startDate = new Date(), terms = '30 days') => {
    const startDateObj = new Date(startDate);
    const [termValue, termUnit] = terms.split(' ');
    const endDateObj = new Date(startDateObj);
    switch (termUnit) {
        case 'days':
            endDateObj.setDate(endDateObj.getDate() + parseInt(termValue));
            break;
        case 'weeks':
            endDateObj.setDate(endDateObj.getDate() + parseInt(termValue) * 7);
            break;
        case 'months':
            endDateObj.setMonth(endDateObj.getMonth() + parseInt(termValue));
            break;
        case 'years':
            endDateObj.setFullYear(endDateObj.getFullYear() + parseInt(termValue));
            break;
        default:
            throw new Error('Invalid term unit');
    }
    const endDate = endDateObj.toDateString();

    return endDate;
};

export default MainInfo