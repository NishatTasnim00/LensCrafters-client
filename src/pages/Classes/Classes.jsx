import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import useClasses from "../../hooks/useClasses";
import Title from "../../component/Title/Title";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetUser from "../../hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../component/Loader";
import { toast } from "react-hot-toast";

const Classes = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { userData } = useGetUser();
  const {
    data: classes = [],
    refetch,
    isLoading: isClassLoading,
  } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      // if (!user) {
      // 	return [];
      // }
      const result = await axiosSecure.get(`/classes`);
      return result.data;
    },
  });

  const handleBookClass = async (userId, classId) => {
    const updateDoc = {
      userId: userId,
      classId: classId,
    };
    console.log(updateDoc);

    await axiosSecure
      .post(`${import.meta.env.VITE_API_URL}/bookClass`, updateDoc)
      .then((result) => {
        if (result.data.modifiedCount > 0) {
          toast.success("Class booked successfully");
        } else {
          toast.error(result?.data?.message);
        }
        console.log(result);
        // toast.success(result?.data?.message);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error?.response?.data?.message);
      });
  };
  if (isClassLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="container">
      <div className="pt-10 lg:pt-5"></div>
      <Title heading={"Courses List"}></Title>
      <div className="container-grid">
        {classes.map((singleClass) => (
          <ClassesCard
            handleBookClass={handleBookClass}
            key={singleClass._id}
            singleClass={singleClass}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
