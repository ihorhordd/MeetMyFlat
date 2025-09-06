import { Popover, Button, DataList, Tooltip } from "@radix-ui/themes";
import { IPriceDetails } from '../models/cards'
import React from 'react';
const DataListItem = ({ label, text }: { label: string, text: React.ReactNode }) => {
    return (
        <DataList.Item align="start">
            <DataList.Label minWidth="58px" highContrast={true}>{label}</DataList.Label>
            <DataList.Value>{text}</DataList.Value>
        </DataList.Item>
    )
}

export const PriceDetails = ({ priceDetails }: { priceDetails: IPriceDetails }) => {
    const { negotiable, rentPrice, utilities, deposit } = priceDetails
    const estimatedPPM = rentPrice + utilities;
    const popoverZIndex = 9;
    return (
        <div>
            <Popover.Root>
                <Popover.Trigger>
                    <Button variant="soft">Estimated PPM: {estimatedPPM}. Deposit {deposit}</Button>
                </Popover.Trigger>
                <Popover.Content maxWidth="300px" size="3" style={{ zIndex: popoverZIndex}}>
                    <DataList.Root>
                        <DataListItem label="Rent" text={
                            <>
                                {rentPrice.toString()} {" "}
                                <Tooltip content={negotiable ? "Negotiable" : "Not negotiable"} style={{ zIndex: popoverZIndex + 1}}>
                                    <span style={{ cursor: 'pointer'}}>&nbsp;{negotiable ? "✅" : "❌"}</span>
                                </Tooltip>
                            </>
                        } />

                        <DataListItem label="Utilities" text={utilities.toString()} />
                        <DataListItem label="deposit" text={deposit.toString()} />
                    </DataList.Root>
                </Popover.Content>

            </Popover.Root>
        </div>
    )
}


