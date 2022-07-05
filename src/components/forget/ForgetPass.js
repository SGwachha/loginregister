import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { handleForgetApi } from "../../services/apiServices";
import { toast } from "react-toastify";
const ForgetPass = () => {
  // for navigation bar
  const nav = useNavigate();
  const loginNav = () => {
    nav("/login");
  };
  // navigation for reset page
  const resetNav = useNavigate();
  // useform
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    let forgetApi = await handleForgetApi(data);
    if (forgetApi.type === "error") {
      toast.error(forgetApi.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success(`Reset code is sent to ${data.email}`, {
        position: toast.POSITION.TOP_CENTER,
      });
      resetNav("/reset?email=" + data.email);
    }
  };
  return (
    <>
      <Flex align="center" justifyContent={"center"}>
        <Box>
          <Heading fontSize={"2xl"} color="#052F40">
            Forget Password?
          </Heading>
          <Text fontSize={15} color="gray.500" mb={4}>
            Enter an email address you used to sign in to.
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Email here !!!"
              variant={"filled"}
              textAlign="center"
              {...register("email")}
              width={"30"}
              mb="4"
              size={"lg"}
            />
            <br />
            <Button
              type="submit"
              variant={"solid"}
              color="white"
              colorScheme={"telegram"}
              isLoading={isSubmitting}
              size={"sm"}
            >
              Continue <ArrowForwardIcon />{" "}
            </Button>
          </form>
          <Text mt={4}>Remember password?</Text>
          <Button
            variant={"link"}
            color="twitter.500"
            fontWeight={"light"}
            onClick={loginNav}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ForgetPass;
