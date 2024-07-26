import React from 'react'
import { createContext, useContext, useState, useEffect } from 'react';
import { SelectContext, SelectedActionContext, SelectedEditorDeviceContext, SelectedEditorDeviceViewOrientationContext, Context, SelectedInputTableInputContext } from '@components/Provider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Utils } from '@app/editor/utils.js'
import ActionList from '@components/ActionList.jsx'

const AxisDataTable = () => {
    const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
    const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
    const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)

    const { selectedEditorDevice, setselectedEditorDevice } = useContext(SelectedEditorDeviceContext)
    const { selectedInputTableInput, setSelectedInputTableInput } = useContext(SelectedInputTableInputContext);
    const [isLoading, setIsLoading] = useState(false)
    const { profileContext, setprofileContext } = useContext(Context);
    const { selectedEditorDeviceViewOrientation, setSelectedEditorDeviceViewOrientation } = useContext(SelectedEditorDeviceViewOrientationContext);

    const [loading, setLoading] = useState(true)
    const [axis, setAxis] = useState([{
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }, {
        id: '1020',
        code: 'f230fh0asdg3',
        name: 'Bamboo Watdch',
        description: 'Prodddasuct Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }]);

    useEffect(() => {

            try {
                setIsLoading(true);

                setAxis(JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]
                .buttons["axis"])
            } catch (error) {
                console.log(error);
            }
            finally {
                console.log(JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]);
                setIsLoading(false);
            }

        



    }, []);
    const getSlotIcon = (node) => {

        if (!Object.hasOwn(node.data, 'slotName')) {
            return <> {node.label}</>;
        } else {
            return (
                <div className='flex corner-inputTableIcons'>
                    {Utils.getInputSlotIcons(node.data.slotName, "25px", "25px")}
                </div>
            )
        }
    }
    const imageBodyTemplate = (node) => {

        return (

            <Button type="inputTable" className=" flex flex-col   " >

            <div className='flex flex-col content-start  self-start gap-[8px] '>
                <div className='flex flex-row  h-fit'>
                    {Utils.getInputIcon(node.label, "30px", "30px")}
                </div>
                <div className='flex flex-row gap-[8px]'>
                    <div className='flex '>
                        {/* {getCategoryHeader(node)} */}

                    </div>
                    <p className='text-inputTable'> {node.label} </p>

                </div>
                <div className='flex flex-col ml-[2px]'>

                    <ActionList layers={node.layers} input_direction="inputTable" />

                </div>
                {/* <div className="spacer-dialogue" />

            <span className='self-center justify-center '>{label}</span> */}
                {/* <div className="spacer-dialogue" /> */}
                {/* {expanded} */}
            </div>

        </Button>

        )
    };

    return (
        <DataTable
            className='min-w-[345px] '
            filterDisplay="row" type='profile card' value={JSON.parse(sessionStorage.getItem('loadedProfile')).deviceList[sessionStorage.getItem('selectedEditorDevice')]["axis"]} rows={3} paginator={false} selectionMode='single' >
            <Column field="name" filter filterPlaceholder='search' body={imageBodyTemplate}></Column>
        </DataTable>
    )
}

export default AxisDataTable