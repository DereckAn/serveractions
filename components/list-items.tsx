import { Job } from "@prisma/client";

interface ListItemsProps {
    job: Job;
}

export const ListItems = ({job : { title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createAt }}: ListItemsProps) => {
    return ( <article className="flex border gap-3 rounded-lg p-5 hover:bg-muted">{title}</article> );
}
 