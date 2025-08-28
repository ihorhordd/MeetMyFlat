import { Popover, Button, DataList} from "@radix-ui/themes";
import {IPriceDetails} from '../models/cards'
const DataListItem = ({label, text}: {label: string, text: string}) => {
    return (
     <DataList.Item align="start">
         <DataList.Label minWidth="58px" highContrast={true}>{label}</DataList.Label>
         <DataList.Value>{text}</DataList.Value>
     </DataList.Item>
    )
 }

export const PriceDetails = ({ priceDetails }: { priceDetails: IPriceDetails })=> {
    const {negotiable, rentPrice, utilities, deposit } = priceDetails
    const estimatedPPM = rentPrice + utilities;
    return (
        <div>
            <Popover.Root>
                <Popover.Trigger>
                    <Button variant="soft">Estimated PPM: {estimatedPPM}. Deposit {deposit}</Button>
                </Popover.Trigger>
                <Popover.Content maxWidth="300px" size="3" style={{ zIndex: 2000 }}>
                    <DataList.Root>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <DataListItem label="Rent" text={rentPrice.toString()}/>
                        <span className="text-left">Negotiable: {negotiable ? "🤝": "✋" }</span>
                        </span>
                        <DataListItem label="Utilities" text={utilities.toString()}/>
                        <DataListItem label="deposit" text={deposit.toString()}/>
                    </DataList.Root>
                </Popover.Content>

            </Popover.Root>
        </div>
    )
}


