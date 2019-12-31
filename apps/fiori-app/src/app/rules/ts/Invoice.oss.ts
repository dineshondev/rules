/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const InvoiceRule = 'class=Invoice {   field=uniqueName {     label: "Id";   }   field=name {     label: "Title";     trait: required;     placeholder: "Unique name that identifies this Invoice";   }   field=requestor {     trait:asAutoComplete;     placeholder: "Select a user";     lookupKey: "fullName";   }    field=purchaseOrder {     trait:asSelect;     choices: ["PO1111", "PO2222", "PO33333", "P33333", "PO3333", "PO44444", "PO55555"];   }    field=supplier {     trait:asAutoComplete;     placeholder: "Select a supplier";   }    field=paymentTerms {     trait:asSelect, required;     choices:${controller.paymentTermsDS};   }    field=(billingAddress, shippingAddress ) {     trait:asAutoComplete, inlineObject;   }     field=description {     trait:longtext;     label: "Purpose";   }    field=accountCategory {     trait:asRadio;     choices: ["Asset", "Order", "Cost Center", "Project"];   } }  class=Invoice {    operation=create {       zNone => *;       zLeft   =>  name =>  needBy => totalAmount => billingAddress => supplier;    }     operation=edit {       zNone => *;       zLeft   =>  name#fluid => requestor =>  needBy => purchaseOrder => shippingAddress => billingAddress => accountCategory;       zRight  => totalAmount => supplier => paymentTerms => taxInvoiceNumber => isShared => shareContact;       zBottom => description;    }      operation=view {       zNone => *;       zLeft   => name  => requestor => needBy => purchaseOrder => shippingAddress => billingAddress => accountCategory;       zRight  => uniqueName => totalAmount => supplier => paymentTerms => taxInvoiceNumber => isShared => shareContact;       zBottom => description;     } }   ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 