'use client'
import CloseButton from 'public/assets/icons/generic/button_close.svg'
import IconLegend from '@components/generic/IconLegend';
import React from 'react'
import ActionTable from '@app/editor/ActionTable'
import InputTable from '@app/editor/InputTable'
import { SelectedEditorActionTableTargetContext, SelectContext, SelectedEditorActionContext, EditorPanelTitleContext } from '@components/Provider';
import LayerChip from '@components/generic/LayerChip';
import ModLayerSelector from '@components/actionSelector/ModLayerSelector.js';
import BindButton from '@app/editor/BindButton.jsx'
import PanelSwitchButtonMobile from './PanelSwitchButtonMobile.js';
import { Utils } from '@app/editor/utils.js'
import GameActionTable from '@app/editor/GameActionTable.jsx'
import TreeTableDialogue from '@app/editor/TreeTableDialogue.jsx'
import { createContext, useContext, useState } from 'react';



const Editor = ({ show }) => {
  const [selectedInput, setSelectedInput] = useState("CONTEXT INPUT: DEFAULT");
  const [selectedAction, setSelectedAction] = useState("CONTEXT ACTION: DEFAULT")
  const { selectedViewerInput, setSelectedViewerInput } = useContext(SelectContext)
  const { selectedEditorInput, setSelectedEditorInput } = useContext(SelectedEditorActionContext)
  const { editorPanelTitle, setEditorPanelTitle } = useContext(EditorPanelTitleContext)
  const { selectedEditorInputActions, setSelectedEditorInputActions } = useContext(SelectedEditorActionTableTargetContext)



  // useEffect(() => {
  //   renderBindButton();


  // }, [selectedInput, selectedAction])
  const getInputTitle = () => {
    try {
      var name = (editorPanelTitle).toUpperCase();
      return (name)
    } catch (error) {
      return ("SELECT A BUTTON");
    }
  }
  return (


    <div className='panel-default' id="editorPanel">
      <div className='flex space-between flex-row  w-full'>
        <button >
          <CloseButton className='button1' />
        </button>
        <div className='w-full flex flex-row justify-end mr-[10px]'>
          <IconLegend />
        </div>


      </div>
      <PanelSwitchButtonMobile whatPanel="editor" />

      <div className='text-input-title flex flex-row'>
        <div className='corner-test w-[70px] h-[100%]'>
          {Utils.getInputIconTitle(selectedEditorInputActions)}
        </div>

        {/* <p className='text-base ml-[0px]'></p> */}
        <p className='title-colon '> :</p>
        <p className='text-input-title corner-test '>{editorPanelTitle.toUpperCase()}</p>
      </div>

      {/* <div className='text-input-title'>
        <p className='text-input-title corner-test '> {getInputTitle()}</p>
      </div> */}
      {/* <div className='flex flex-col gap-[7px]'>
        <p className='text-base self-start'>// MODIFIER LAYERS</p>
        <div className='flex flex-row gap-[10px]'>
          <LayerChip layer="1" />
          <LayerChip layer="2" />
        </div>


      </div> */}
      <div className='flex flex-col gap-[2px] w-[100%]' >
        <div className="panel-inset flex flex-col gap-[0px]">

          <InputTable
            onInputSelect={setSelectedInput}
          />

          <ModLayerSelector />
        </div>
        <TreeTableDialogue />
        <BindButton selectedAction={setSelectedAction} selectedInput={setSelectedAction} />
        {/* {renderBindButton()} */}
        {/* <ActionTable type="actions" /> */}
        <div className='panel-inset'>
          {/* <ActionTable onActionSelect={setSelectedAction} /> */}
          <GameActionTable> </GameActionTable>
        </div>

        {/* <BindTable /> */}
      </div>

    </div>
  )
}

export default Editor