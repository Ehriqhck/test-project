"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact-sass-theme-9.6.2/themes/mytheme/theme.scss";
import Tailwind from 'primereact/passthrough/tailwind';

export const SelectContext = createContext();
export const SelectedEditorActionContext = createContext();
export const SelectedEditorActionTableTargetContext = createContext();

export const SelectedInputContext = createContext();
export const SelectedLayerContext = createContext();
export const EditorPanelTitleContext = createContext();
export const ViewerPanelTitleContext = createContext();

export const SelectedActionContext = createContext();
export const ShowViewerPanelContext = createContext();
export const ShowEditorPanelContext = createContext();

export const Context = createContext();
export const ActionUpdateContext = createContext();


const Provider = ({ children, session }) => {

  const [selectedLayer, setSelectedLayer] = useState(0);
  const [selectedViewerInput, setSelectedViewerInput] = useState("Circle Switch");
  const [selectedAction, setSelectedAction] = useState("No Action Selected");
  const [selectedEditorInput, setSelectedEditorInput] = useState("No Input Selected");
  const [selectedEditorInputActions, setSelectedEditorInputActions] = useState("circleSwitch");

  const [showEditorPanel, setshowEditorPanel] = useState(false);
  const [showViewerPanel, setshowViewerPanel] = useState(true);
  const [editorPanelTitle, setEditorPanelTitle] = useState("SELECT A BUTTON");
  const [viewerPanelTitle, setViewerPanelTitle] = useState("SELECT A BUTTON");
  const [actionUpdate, setActionUpdate] = useState(false);

  const [profileContext, setprofileContext] = useState(false);

  return (
    <SessionProvider session={session}>
      <PrimeReactProvider >
        <SelectedLayerContext.Provider value={{ selectedLayer, setSelectedLayer }}>

          <SelectContext.Provider value={{ selectedViewerInput, setSelectedViewerInput }}>
            <Context.Provider value={{ profileContext, setprofileContext }}>
              <SelectedActionContext.Provider value={{ selectedAction, setSelectedAction }}>
                <SelectedEditorActionContext.Provider value={{ selectedEditorInput, setSelectedEditorInput }}>
                  <ShowEditorPanelContext.Provider value={{ showEditorPanel, setshowEditorPanel }}>
                    <ShowViewerPanelContext.Provider value={{ showViewerPanel, setshowViewerPanel }}>
                      <EditorPanelTitleContext.Provider value={{ editorPanelTitle, setEditorPanelTitle }}>
                        <ViewerPanelTitleContext.Provider value={{ viewerPanelTitle, setViewerPanelTitle }}>
                          <SelectedEditorActionTableTargetContext.Provider value={{ selectedEditorInputActions, setSelectedEditorInputActions }}>
                            <ActionUpdateContext.Provider value={{actionUpdate, setActionUpdate}}>
                              {children}
                            </ActionUpdateContext.Provider>
                          </SelectedEditorActionTableTargetContext.Provider>
                        </ViewerPanelTitleContext.Provider>
                      </EditorPanelTitleContext.Provider>
                    </ShowViewerPanelContext.Provider>
                  </ShowEditorPanelContext.Provider>
                </SelectedEditorActionContext.Provider>

              </SelectedActionContext.Provider>

            </Context.Provider>
          </SelectContext.Provider>
        </SelectedLayerContext.Provider>
      </PrimeReactProvider>
    </SessionProvider>)
}

export default Provider



