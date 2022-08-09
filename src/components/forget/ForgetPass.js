import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate, Link } from "react-router-dom";
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
      <Flex
        bg="#fff"
        mt="5%"
        ml={"35%"}
        w={"25%"}
        h={"35%"}
        align={"center"}
        justify={"center"}
        boxShadow={""}
      >
        <Box w={"100%"} h={"100%"} textAlign={"center"}>
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
              mt="5%"
              mb="4%"
              size={"lg"}
            />
            <br />
            <Link
              to="/reset"
              type="submit"
              variant={"solid"}
              // color="white"
              colorScheme={"telegram"}
              isLoading={isSubmitting}
              size={"sm"}
            >
              Continue <ArrowForwardIcon />{" "}
            </Link>
          </form>
          <Text mt={"5%"}>Remember password?</Text>
          <Button
            variant={"link"}
            onClick={loginNav}
            mt="5%"
            border={"none"}
            bg={"lightgrey"}
          >
            Login
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default ForgetPass;
