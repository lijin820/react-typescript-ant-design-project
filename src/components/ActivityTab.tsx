import React, { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
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
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setModalVisible(true)}
      >
        Add new activity
      </Button>
      <AddActivityModal visible={modalVisible} setVisible={setModalVisible} />
      <ActivityList activities={activities} />
    </div>
  );
}

export default ActivityTab;
