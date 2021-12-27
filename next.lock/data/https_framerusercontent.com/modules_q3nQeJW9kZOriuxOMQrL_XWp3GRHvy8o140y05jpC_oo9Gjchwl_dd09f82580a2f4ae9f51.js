import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (fdf1b67)
import*as React from"react";import{motion,addPropertyControls,cx,useVariantState,useAddVariantProps,useActiveVariantCallback,withCSS,LayoutGroup,ControlType,Stack}from"framer";import Label from"https://framerusercontent.com/modules/fwNVrDL6JqhdaP6uJ0vV/55xIuLtSEeEK8eipp30q/NwyX7nBU7.js";import Note from"https://framerusercontent.com/modules/pxtGSjSWp80m3Le7o9IM/RKiEp0cpnD2P6kxav4Ns/Hp7tF5l7M.js";const variantClassNames={"XNlZb5wU_":"framer-v-1ezoa7g"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="XNlZb5wU_",label:HoRqrRwmj="Label",required:SyvBtNb1h=true,showNote:CzJO5JFDN=true,note:fSabrnjSV="A note for extra info",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"XNlZb5wU_",variant,transitions,variantClassNames});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,{});return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,className:cx("framer-PCAmg",classNames),style:{"display":"contents"},onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),children:/*#__PURE__*/ _jsxs(Stack,{...restProps,layoutId:"XNlZb5wU_",style:{"rotate":0,...style},className:cx("framer-1ezoa7g",className),background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},center:false,transition:transition,ref:ref,...addVariantProps("XNlZb5wU_"),children:[/*#__PURE__*/ _jsx(motion.div,{layoutId:"C1Dw0xM0N-container",style:{"rotate":0},className:"framer-1pwhcbl-container",transition:transition,children:/*#__PURE__*/ _jsx(Label,{width:"100%",height:"100%",layoutId:"C1Dw0xM0N",id:"C1Dw0xM0N",label:HoRqrRwmj,required:SyvBtNb1h,style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("C1Dw0xM0N")})}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"ksxa59h7I-container",style:{"rotate":0},className:"framer-pcrcu0-container",transition:transition,children:/*#__PURE__*/ _jsx(Note,{width:"100%",height:"100%",layoutId:"ksxa59h7I",id:"ksxa59h7I",showNote:CzJO5JFDN,note:fSabrnjSV,style:{"width":"100%","height":"100%"},transition:transition,...addVariantProps("ksxa59h7I")})})]})})}));});const css=`.framer-PCAmg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}
.framer-PCAmg .framer-1ezoa7g {position: relative; overflow: visible; width: 268px; height: 15px;}
.framer-PCAmg .framer-1pwhcbl-container {position: relative; width: 1px; height: 15px; flex: 1 0 0px;}
.framer-PCAmg .framer-pcrcu0-container {position: relative; width: 103px; height: 13px; flex-shrink: 0;}`;/**
 * This is a generated Framer component.
 * @framerVariables {"HoRqrRwmj":"label","SyvBtNb1h":"required","CzJO5JFDN":"showNote","fSabrnjSV":"note"}
 * @framerIntrinsicHeight 15
 * @framerIntrinsicWidth 268
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const Frameroo9Gjchwl=withCSS(Component,css);export default Frameroo9Gjchwl;Frameroo9Gjchwl.displayName="Label & Note";Frameroo9Gjchwl.defaultProps={width:268,height:15};addPropertyControls(Frameroo9Gjchwl,{"HoRqrRwmj":{"type":ControlType.String,"title":"Label","defaultValue":"Label"},"SyvBtNb1h":{"type":ControlType.Boolean,"title":"Required","defaultValue":true},"CzJO5JFDN":{"type":ControlType.Boolean,"title":"Show Note","defaultValue":true},"fSabrnjSV":{"type":ControlType.String,"title":"Note","defaultValue":"A note for extra info"}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Frameroo9Gjchwl","slots":[],"annotations":{"framerIntrinsicWidth":"268","framerSupportedLayoutWidth":"any","framerIntrinsicHeight":"15","framerSupportedLayoutHeight":"any","framerContractVersion":"1","framerVariables":"{\"HoRqrRwmj\":\"label\",\"SyvBtNb1h\":\"required\",\"CzJO5JFDN\":\"showNote\",\"fSabrnjSV\":\"note\"}"}},"__FramerMetadata__":{"type":"variable"}}}