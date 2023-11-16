import React, { useState } from "react";
import Button from "components/ui/Button";
import Container from "components/ui/Container";
import Modal from "components/ui/Modal";
import SelectBox from "components/ui/SelectBox";
import Textarea from "components/ui/Textarea";
import member from "data/member";
import Hero from "components/Hero";
//
import BtnGroup from "./BtnGroup";
import InputGroup from "./InputGroup";
const list = member.map((n) => n.name);

function Ui() {
  const [str, setStr] = useState("");
  const [modalOpen, setModal] = useState(false);
  const [select, SetSelect] = useState(null);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = (e) => {
    setModal(false);
  };

  const handleInputChange = (e) => {
    setStr(e.target.value);
  };

  const handleChange = (e) => {
    SetSelect(e.target.value);
  };
  return (
    <>
      <BtnGroup></BtnGroup>
      <hr />
      <BtnGroup $size={"lg"}></BtnGroup>
      <hr />
      <BtnGroup $size={null} $outline={"true"}></BtnGroup>
      <hr />
      <BtnGroup $size={"lg"} $outline={"true"}></BtnGroup>
      <hr />
      <section>
        {/* Container 작업해야함 */}
        <Container></Container>
      </section>
      <hr />
      <InputGroup $state={str} $onChange={handleInputChange}></InputGroup>
      <div>값 : {str}</div>
      <hr />
      <section>
        <h1>Modal</h1>
        <Button $onClick={openModal} $color={"blue"} $outline="true">
          open Modal
        </Button>
        {modalOpen ? (
          <Modal $color={"blue"} $onClose={closeModal} $header={"확인창"}>
            gkgkgk
          </Modal>
        ) : null}
      </section>
      <hr />
      <section>
        <h1>Select Box</h1>
        <SelectBox $onChange={handleChange} $listData={list}></SelectBox>
        {select}
      </section>

      <hr />
      {/* Textarea 작업해야함 */}
      <Textarea></Textarea>

      <hr />
      <Hero></Hero>
      <hr />
    </>
  );
}

export default Ui;
