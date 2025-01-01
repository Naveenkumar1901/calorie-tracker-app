import {
    Category, TagUser, Buildings2, ArrangeHorizontal, Ticket, Ticket2, ShoppingBag, TableDocument, Box, DirectboxNotif, Box1,
    Moneys, Bubble, UserTag, UserOctagon, TaskSquare, TruckFast, TruckTick, ArrowSwapHorizontal, ExportCircle
} from "iconsax-react";

const pages = [
    {
        key: "1",
        id: "dashboard",
        title: "Dashboard",
        icon: <Category size={18} />,
        navLink: "/dashboard",
    },
    {
        header: "CRM",
    },
    {
        key: "2",
        id: "contacts",
        title: "Contacts",
        icon: <TagUser size={18} />,
        navLink: "/crm/contacts",
        group: "CRM"
    },
    {
        key: "3",
        id: "companies",
        title: "Companies",
        icon: <Buildings2 size={18} />,
        navLink: "/crm/companies",
        group: "CRM"
    },
    {
        key: "4",
        id: "deals",
        title: "Deals",
        icon: <ArrangeHorizontal size={18} />,
        navLink: "/crm/deals",
        group: "CRM"
    },
    {
        key: "5",
        id: "tickets",
        title: "Tickets",
        icon: <Ticket size={18} />,
        navLink: "/crm/tickets",
        group: "CRM"
    },
    {
        key: "6",
        id: "tasks",
        title: "Tasks",
        icon: <TaskSquare size={18} />,
        navLink: "/crm/tasks",
        group: "CRM"
    },
    {
        header: "Sales",
    },
    {
        key: "7",
        id: "sales-order",
        title: "Sales Order",
        icon: <Box1 size={18} />,
        navLink: "/sales/sales-order",
        group: "Sales"
    },
    {
        key: "8",
        id: "sales-quotation",
        title: "Sales Quotation",
        icon: <DirectboxNotif size={18} />,
        navLink: "/sales/sales-quotation",
        group: "Sales"
    },
    {
        key: "9",
        id: "contracts",
        title: "Contracts",
        icon: <TableDocument size={18} />,
        navLink: "/contracts",
        group: "Sales"
    },
    {
        header: "WMS",
    },
    {
        key: "10",
        id: "wms-dashboard",
        title: "WMS Dashboard",
        icon: <TruckFast size={18} />,
        navLink: "/wms/dashboard",
        group: "WMS"
    },
    {
        header: "Picking",
    },
    {
        key: "11",
        id: "pick-ticket-creation",
        title: "Pick Ticket Creation",
        icon: <Ticket size={18} />,
        navLink: "/wms/pick-ticket-creation",
        group: "Picking",
    },
    {
        key: "12",
        id: "pick-ticket",
        title: "Pick Ticket",
        icon: <Ticket2 size={18} />,
        navLink: "/wms/pick-ticket",
        group: "Picking",
    },
    {
        header: "Receiving",
    },
    {
        key: "13",
        id: "po-receiving",
        title: "PO Receiving",
        icon: <ShoppingBag size={18} />,
        navLink: "/wms/po-receiving",
        group: "Receiving",
    },
    {
        key: "14",
        id: "grpo-draft-receipt",
        title: "GRPO Draft Receipt",
        icon: <TruckTick size={18} />,
        navLink: "/wms/grpo-draft-receipt",
        group: "Receiving",
    },
    {
        header: "Returns",
    },
    {
        key: "15",
        id: "customer-return",
        title: "Customer Return",
        icon: <UserTag size={18} />,
        navLink: "/wms/customer-return",
        group: "Returns",
    },
    {
        key: "16",
        id: "vendor-return",
        title: "Vendor Return",
        icon: <UserOctagon size={18} />,
        navLink: "/wms/vendor-return",
        group: "Returns",
    },
    {
        header: "Inventory",
    },
    {
        key: "17",
        id: "inventory-transfer",
        title: "Inventory Transfer",
        icon: <ExportCircle size={18} />,
        navLink: "/wms/inventory-transfer",
        group: "Inventory",
    },
    {
        key: "18",
        id: "bulk-bin-transfer",
        title: "Bulk Bin Transfer",
        icon: <ArrowSwapHorizontal size={18} />,
        navLink: "/wms/bulk-bin-transfer",
        group: "Inventory",
    },
    {
        header: "Others",
    },
    {
        key: "19",
        id: "expense-claim",
        title: "Expense Claim",
        icon: <Moneys size={18} />,
        navLink: "/expense/expense-claim",
        group: "Others"
    },
    {
        key: "20",
        id: "equipment-builder",
        title: "Equipment Builder",
        icon: <Box size={18} />,
        navLink: "/equipment/list",
        group: "Others"
    },
    {
        header: "Explore",
    },
    {
        key: "21",
        id: "integrations",
        title: "Integrations",
        icon: <Bubble size={18} />,
        navLink: "/integrations",
        group: "Explore"
    }
];

export default pages;