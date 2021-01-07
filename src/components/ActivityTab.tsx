import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleFilled } from "@ant-design/icons";
import AddActivityModal from "./AddActivityModal";
import ActivityList from "./ActivityList";
import { GET_ALL_ACTIVITIES_REQUEST } from "../redux/constants";
import getActivityState from "../redux/selectors";

function ActivityTab(): ReactElement {
  const dispatch = useDispatch();
  const { activities } = useSelector(getActivityState);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch({ type: GET_ALL_ACTIVITIES_REQUEST });
  }, [dispatch]);

  return (
    <div>
      <button
        data-id="add-button"
        type="button"
        className="create-activity-btn"
        onClick={() => setModalVisible(true)}
      >
        <PlusCircleFilled style={{ fontSize: 22, color: "#4994FF" }} />
        <span className="activity-text">Add new activity</span>
      </button>
      <AddActivityModal
        data-id="add-activity-modal"
        visible={modalVisible}
        setVisible={setModalVisible}
      />
      <ActivityList activities={activities} />
    </div>
  );
}

export default ActivityTab;
