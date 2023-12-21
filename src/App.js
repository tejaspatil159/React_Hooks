import "./App.css";
import React from "react";
import Superheroes from "./components/props/PropsComponent";
import UseStateComponent from "./components/hooks/useState/UseStateComponent";
import UseStateWithArrays from "./components/hooks/useState/UseStateWithArrays";
import UseStateWithObjects from "./components/hooks/useState/UseStateWithObjects";
import UseEffectConditionallyRender from "./components/hooks/useEffect/UseEffectConditionallyRender";
import UseEffectSingleRender from "./components/hooks/useEffect/UseEffectSingleRender";
import MouseMoveShow from "./components/hooks/useEffect/CleanupCode/MouseMoveShow";
import UseEffectIncorectDependency from "./components/hooks/useEffect/UseEffectIncorectDependency";
import DataFetching from "./components/hooks/useEffect/DataFetching";
import SingleDataFetching from "./components/hooks/useEffect/SingleDataFetching";
import SingleDataFetchingWithButton from "./components/hooks/useEffect/SingleDataFetchingWithButton";
import A from "./components/hooks/useContext/A";
import SimpleStateAndAction from "./components/hooks/useReducer/SimpleStateAndAction";
import ComplexStateAndAction from "./components/hooks/useReducer/ComplexStateAndAction";
import MultipleUseReducers from "./components/hooks/useReducer/MultipleUseReducers";
import GlobalStateManagement from "./components/hooks/useReducer/UseReducerWithUseContext/GlobalStateManagement";
import DataFetchingWithUseState from "./components/hooks/useReducer/DataFetching/DataFetchingWithUseState";
import DataFetchingWithUseReducer from "./components/hooks/useReducer/DataFetching/DataFetchingWithUseReducer";
import UseCallBackComponent from "./components/hooks/useCallback/UseCallbackComponent";
import UseMemoComponent from "./components/hooks/useMemo/UseMemoComponent";
import InputFocus from "./components/hooks/useRef/InputFocus";
import Timer from "./components/hooks/useRef/Timer";
import DocTitleOne from "./components/hooks/CustomHooks/DocumentTitleHook/DocTitleOne";
import DocTitleTwo from "./components/hooks/CustomHooks/DocumentTitleHook/DocTitleTwo";
import CounterTwo from "./components/hooks/CustomHooks/CounterHook/CounterTwo";
import CounterOne from "./components/hooks/CustomHooks/CounterHook/CounterOne";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Superheroes name="Bruce" supername="Batman">
        <button>Action</button>
        <p>Transformation</p>
      </Superheroes>
      <Superheroes name="Clark" supername="Superman" />
      <Superheroes name="Diana" supername="Wonder women" />
      <UseStateComponent />
      <UseStateWithObjects />
      <UseStateWithArrays />
      <UseEffectConditionallyRender />
      <UseEffectSingleRender />
      <MouseMoveShow />
      <UseEffectIncorectDependency />
      <DataFetching />
      <SingleDataFetching />
      <SingleDataFetchingWithButton />
      <UserContext.Provider value={"Tejas"}>
        <ChannelContext.Provider value={"Tejas D Patil"}>
          <A />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <SimpleStateAndAction />
      <ComplexStateAndAction />
      <MultipleUseReducers />
      <GlobalStateManagement />
      <DataFetchingWithUseState />
      <DataFetchingWithUseReducer />
      <UseCallBackComponent />
      <UseMemoComponent />
      <InputFocus />
      <Timer />
      <DocTitleOne />
      <DocTitleTwo />
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
