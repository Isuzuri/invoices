import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvoiceService } from "../../services/invoice.service";
import InvoiceHeader from "./header/header";
import MainInfo from "./main-info/main-info";
function InvoicePage() {
    const { id } = useParams()
    const [ invoice, setInvoice ] = useState({})

    useEffect(() => {
        if (!id) return

        setInvoice(InvoiceService.getInvoiceById(id))
    }, [id])

    return (
        <div>
            <InvoiceHeader invoice={invoice}/>
            <MainInfo invoice={invoice}/>
        </div>
    )
}

export default InvoicePage;