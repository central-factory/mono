
// tslint:disable: max-line-length
export default `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_0jb578j" name="NUEVO CORREO">
      <bpmn2:outgoing>SequenceFlow_0szncnq</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_1azlaik" name="CLASIFICADO">
      <bpmn2:incoming>SequenceFlow_0h5hfzo</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_0xbpse0</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_0oxb0ld</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_1hohjlf</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_1g86s58</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_11q0bm3" name="DESCARTADO">
      <bpmn2:incoming>SequenceFlow_0oxb0ld</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_109jkm4</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_115l9i7</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_0oxb0ld" name="Descartar" sourceRef="IntermediateThrowEvent_1azlaik" targetRef="IntermediateThrowEvent_11q0bm3" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_0d9gibg" name="PENDIENTE">
      <bpmn2:incoming>SequenceFlow_0szncnq</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_115l9i7</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_1q67s9i</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_1wa48bc</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_0h5hfzo</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_109jkm4</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_0pbcrqh</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_0szncnq" sourceRef="StartEvent_0jb578j" targetRef="IntermediateThrowEvent_0d9gibg" />
    <bpmn2:sequenceFlow id="SequenceFlow_0h5hfzo" name="Clasificar" sourceRef="IntermediateThrowEvent_0d9gibg" targetRef="IntermediateThrowEvent_1azlaik" />
    <bpmn2:sequenceFlow id="SequenceFlow_115l9i7" name="Reabrir" sourceRef="IntermediateThrowEvent_11q0bm3" targetRef="IntermediateThrowEvent_0d9gibg" pfs:cond="sassa" />
    <bpmn2:sequenceFlow id="SequenceFlow_109jkm4" name="Descartar" sourceRef="IntermediateThrowEvent_0d9gibg" targetRef="IntermediateThrowEvent_11q0bm3" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_07ssof6" name="ATENDIDO">
      <bpmn2:incoming>SequenceFlow_0pbcrqh</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_1hohjlf</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_1q67s9i</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_0pbcrqh" name="Responder" sourceRef="IntermediateThrowEvent_0d9gibg" targetRef="IntermediateThrowEvent_07ssof6" />
    <bpmn2:sequenceFlow id="SequenceFlow_1q67s9i" name="Reabrir" sourceRef="IntermediateThrowEvent_07ssof6" targetRef="IntermediateThrowEvent_0d9gibg" />
    <bpmn2:sequenceFlow id="SequenceFlow_1hohjlf" name="Responder" sourceRef="IntermediateThrowEvent_1azlaik" targetRef="IntermediateThrowEvent_07ssof6" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_0finubw" name="ACEPTADO">
      <bpmn2:incoming>SequenceFlow_1g86s58</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_0xbpse0</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_05je8oy</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_1wa48bc</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_1g86s58" name="Aceptar" sourceRef="IntermediateThrowEvent_1azlaik" targetRef="IntermediateThrowEvent_0finubw" />
    <bpmn2:sequenceFlow id="SequenceFlow_0xbpse0" name="Cambiar Buzón" sourceRef="IntermediateThrowEvent_0finubw" targetRef="IntermediateThrowEvent_1azlaik" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_0z951k2" name="EN GESTIÓN">
      <bpmn2:incoming>SequenceFlow_05je8oy</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_1rjxs2y</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_1qsldqa</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_0rx1ckx</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_12cqay6</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_0dpy7pp</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_05je8oy" name="Comenzar Gestión" sourceRef="IntermediateThrowEvent_0finubw" targetRef="IntermediateThrowEvent_0z951k2" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_0maa1i4" name="FINALIZADO">
      <bpmn2:incoming>SequenceFlow_0rx1ckx</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_0vqmr32</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_1qsldqa</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_0rx1ckx" name="Cerrar" sourceRef="IntermediateThrowEvent_0z951k2" targetRef="IntermediateThrowEvent_0maa1i4" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_1wz389j" name="PAUSADO">
      <bpmn2:incoming>SequenceFlow_12cqay6</bpmn2:incoming>
      <bpmn2:incoming>SequenceFlow_14oex4c</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_1rjxs2y</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_12cqay6" name="Pausar" sourceRef="IntermediateThrowEvent_0z951k2" targetRef="IntermediateThrowEvent_1wz389j" />
    <bpmn2:intermediateThrowEvent id="IntermediateThrowEvent_0gxybyf" name="RESPONDIDO">
      <bpmn2:incoming>SequenceFlow_0dpy7pp</bpmn2:incoming>
      <bpmn2:outgoing>SequenceFlow_14oex4c</bpmn2:outgoing>
      <bpmn2:outgoing>SequenceFlow_0vqmr32</bpmn2:outgoing>
    </bpmn2:intermediateThrowEvent>
    <bpmn2:sequenceFlow id="SequenceFlow_0dpy7pp" name="Responder" sourceRef="IntermediateThrowEvent_0z951k2" targetRef="IntermediateThrowEvent_0gxybyf" />
    <bpmn2:sequenceFlow id="SequenceFlow_14oex4c" name="Pausar" sourceRef="IntermediateThrowEvent_0gxybyf" targetRef="IntermediateThrowEvent_1wz389j" />
    <bpmn2:sequenceFlow id="SequenceFlow_0vqmr32" name="Cerrar" sourceRef="IntermediateThrowEvent_0gxybyf" targetRef="IntermediateThrowEvent_0maa1i4" />
    <bpmn2:sequenceFlow id="SequenceFlow_1rjxs2y" name="Continuar Gestión" sourceRef="IntermediateThrowEvent_1wz389j" targetRef="IntermediateThrowEvent_0z951k2" />
    <bpmn2:sequenceFlow id="SequenceFlow_1qsldqa" name="Reabrir" sourceRef="IntermediateThrowEvent_0maa1i4" targetRef="IntermediateThrowEvent_0z951k2" />
    <bpmn2:sequenceFlow id="SequenceFlow_1wa48bc" name="Devolver" sourceRef="IntermediateThrowEvent_0finubw" targetRef="IntermediateThrowEvent_0d9gibg" />
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_0jb578j_di" bpmnElement="StartEvent_0jb578j">
        <dc:Bounds x="137" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="131" y="199" width="49" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_1azlaik_di" bpmnElement="IntermediateThrowEvent_1azlaik">
        <dc:Bounds x="411" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="344" y="194" width="74" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_11q0bm3_di" bpmnElement="IntermediateThrowEvent_11q0bm3">
        <dc:Bounds x="239" y="36" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="219" y="18" width="76" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0oxb0ld_di" bpmnElement="SequenceFlow_0oxb0ld">
        <di:waypoint x="429" y="156" />
        <di:waypoint x="429" y="54" />
        <di:waypoint x="275" y="54" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="333" y="76" width="49" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_0d9gibg_di" bpmnElement="IntermediateThrowEvent_0d9gibg">
        <dc:Bounds x="239" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="226" y="199" width="63" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0szncnq_di" bpmnElement="SequenceFlow_0szncnq">
        <di:waypoint x="173" y="174" />
        <di:waypoint x="239" y="174" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0h5hfzo_di" bpmnElement="SequenceFlow_0h5hfzo">
        <di:waypoint x="275" y="174" />
        <di:waypoint x="411" y="174" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="320" y="156" width="46" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_115l9i7_di" bpmnElement="SequenceFlow_115l9i7">
        <di:waypoint x="239" y="54" />
        <di:waypoint x="222" y="54" />
        <di:waypoint x="222" y="132" />
        <di:waypoint x="245" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="181" y="93" width="37" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_109jkm4_di" bpmnElement="SequenceFlow_109jkm4">
        <di:waypoint x="257" y="156" />
        <di:waypoint x="257" y="72" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="266" y="107" width="49" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_07ssof6_di" bpmnElement="IntermediateThrowEvent_07ssof6">
        <dc:Bounds x="239" y="287" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="229" y="330" width="57" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0pbcrqh_di" bpmnElement="SequenceFlow_0pbcrqh">
        <di:waypoint x="257" y="192" />
        <di:waypoint x="257" y="287" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="266" y="233" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1q67s9i_di" bpmnElement="SequenceFlow_1q67s9i">
        <di:waypoint x="241" y="297" />
        <di:waypoint x="226" y="256" />
        <di:waypoint x="251" y="191" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="192" y="271" width="37" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1hohjlf_di" bpmnElement="SequenceFlow_1hohjlf">
        <di:waypoint x="429" y="192" />
        <di:waypoint x="429" y="305" />
        <di:waypoint x="275" y="305" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="368" y="242" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_0finubw_di" bpmnElement="IntermediateThrowEvent_0finubw">
        <dc:Bounds x="603" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="619" y="200" width="61" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1g86s58_di" bpmnElement="SequenceFlow_1g86s58">
        <di:waypoint x="438" y="189" />
        <di:waypoint x="510" y="222" />
        <di:waypoint x="560" y="222" />
        <di:waypoint x="619" y="192" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="527" y="237" width="39" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0xbpse0_di" bpmnElement="SequenceFlow_0xbpse0">
        <di:waypoint x="603" y="174" />
        <di:waypoint x="447" y="174" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="488" y="143" width="76" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_0z951k2_di" bpmnElement="IntermediateThrowEvent_0z951k2">
        <dc:Bounds x="790" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="721" y="183" width="68" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_05je8oy_di" bpmnElement="SequenceFlow_05je8oy">
        <di:waypoint x="639" y="174" />
        <di:waypoint x="790" y="174" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="686" y="146" width="52" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_0maa1i4_di" bpmnElement="IntermediateThrowEvent_0maa1i4">
        <dc:Bounds x="790" y="251" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="775" y="294" width="66" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0rx1ckx_di" bpmnElement="SequenceFlow_0rx1ckx">
        <di:waypoint x="808" y="192" />
        <di:waypoint x="808" y="251" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="821" y="225" width="32" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_1wz389j_di" bpmnElement="IntermediateThrowEvent_1wz389j">
        <dc:Bounds x="790" y="49" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="781" y="31" width="54" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_12cqay6_di" bpmnElement="SequenceFlow_12cqay6">
        <di:waypoint x="808" y="156" />
        <di:waypoint x="808" y="85" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="815" y="118" width="36" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateThrowEvent_0gxybyf_di" bpmnElement="IntermediateThrowEvent_0gxybyf">
        <dc:Bounds x="926" y="156" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="971" y="167" width="75" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0dpy7pp_di" bpmnElement="SequenceFlow_0dpy7pp">
        <di:waypoint x="826" y="174" />
        <di:waypoint x="926" y="174" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="849" y="156" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_14oex4c_di" bpmnElement="SequenceFlow_14oex4c">
        <di:waypoint x="944" y="155" />
        <di:waypoint x="944" y="67" />
        <di:waypoint x="826" y="67" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="958" y="111" width="36" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0vqmr32_di" bpmnElement="SequenceFlow_0vqmr32">
        <di:waypoint x="944" y="193" />
        <di:waypoint x="944" y="269" />
        <di:waypoint x="826" y="269" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="946" y="233" width="32" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1rjxs2y_di" bpmnElement="SequenceFlow_1rjxs2y">
        <di:waypoint x="790" y="69" />
        <di:waypoint x="765" y="93" />
        <di:waypoint x="791" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="668" y="85" width="89" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1qsldqa_di" bpmnElement="SequenceFlow_1qsldqa">
        <di:waypoint x="790" y="266" />
        <di:waypoint x="769" y="251" />
        <di:waypoint x="792" y="181" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="718" y="239" width="37" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1wa48bc_di" bpmnElement="SequenceFlow_1wa48bc">
        <di:waypoint x="621" y="156" />
        <di:waypoint x="621" y="106" />
        <di:waypoint x="380" y="106" />
        <di:waypoint x="273" y="165" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="479" y="88" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;
