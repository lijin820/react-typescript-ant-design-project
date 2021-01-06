import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import AddActivityModal from "../../components/AddActivityModal";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: () => ({ activities: [] }),
  useDispatch: () => mockDispatch,
}));

describe("AddActivityModal", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      const visible = true;
      const setVisible = jest.fn;
      wrapper = shallow(
        <AddActivityModal visible={visible} setVisible={setVisible} />
      );
    });

    it("renders the component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should have Modal container", () => {
      const modal = wrapper.find('[data-id="modal-container"]');
      expect(modal.length).toEqual(1);
    });

    it("should have Select Element", () => {
      expect(wrapper.find('[data-id="select-type"]').length).toEqual(1);
    });

    it("should have Property URL Input", () => {
      expect(wrapper.find('[data-id="property-input"]').length).toEqual(1);
    });

    it("should have Notes Input", () => {
      expect(wrapper.find('[data-id="note-input"]').length).toEqual(1);
    });

    it("simulate onOk click event on Modal", () => {
      const modal = wrapper.find('[data-id="modal-container"]');
      expect(modal.simulate("ok")).toHaveLength(1);
    });

    it("simulate onCancel click event on Modal", () => {
      const modal = wrapper.find('[data-id="modal-container"]');
      expect(modal.simulate("cancel")).toHaveLength(1);
    });

    it("simulate Select onChange event", () => {
      const select = wrapper.find('[data-id="select-type"]');
      expect(
        select.simulate("change", {
          value: { name: "type", value: "type value" },
        })
      ).toHaveLength(1);
    });

    it("simulate Propery URL Input onChange event", () => {
      const propertyInput = wrapper.find('[data-id="property-input"]');
      expect(
        propertyInput.simulate("change", {
          target: { name: "username", value: "correctUsername" },
        })
      ).toHaveLength(1);
    });

    it("simulate Note Input onChange event", () => {
      const noteInput = wrapper.find('[data-id="note-input"]');
      expect(
        noteInput.simulate("change", {
          target: { name: "username", value: "correctUsername" },
        })
      ).toHaveLength(1);
    });
  });
});
