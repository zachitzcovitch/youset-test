import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import { Box, Container, Button, Snackbar, Alert } from "@mui/material";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { plans } from "../mock-data";
import {
  Title,
  BillingToggle,
  PlanItem,
  TextInput,
  RadioInput,
} from "../components";

interface FormValues {
  plan?: number;
  email?: string;
  age?: number;
  gender?: string;
}

interface FormErrors {
  email: boolean;
  age: boolean;
  gender: boolean;
}

const initialFormErrors: FormErrors = {
  email: false,
  age: false,
  gender: false,
};

const emailRegex = /^\S+@\S+\.\S+$/;

const Home: NextPage = () => {
  // Parallax
  const [scrollIdx, setScroll] = useState<number>(0);
  const parallax = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  useEffect(() => {
    scroll(scrollIdx);

    const resizeHandler = () => setTimeout(() => scroll(scrollIdx));
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [scrollIdx]);

  // Payments
  const [paymentInterval, setPaymentInterval] = useState<string>("monthly");

  // Form
  const [formValues, setFormValues] = useState<FormValues>({});
  const [formErrorSnackbarOpen, setFormErrorSnackbarOpen] =
    useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({
    ...initialFormErrors,
  });

  function setFormValue(key: string, value: any) {
    setFormValues((fv) => ({ ...fv, [key]: value }));
  }

  useEffect(() => {
    if (typeof formValues.plan !== "undefined") {
      setScroll(1);
    } else {
      setScroll(0);
    }
  }, [formValues]);

  return (
    <>
      <Parallax
        ref={parallax}
        pages={3}
        style={{ overflow: "hidden" }}
        horizontal
      >
        {/* First step */}
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{
            overflowY: "auto",
          }}
        >
          <Container
            sx={{
              maxWidth: 1440,
              p: { xs: "50px 20px", md: "58px 118px" },
            }}
          >
            <Title />
            <Box sx={{ mt: "57px" }}>
              <BillingToggle
                value={paymentInterval}
                setValue={setPaymentInterval}
              />
            </Box>
            <Box
              data-aos="fade-down"
              data-aos-delay="50"
              sx={{
                mt: "56px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "32px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {plans.map((plan, idx) => {
                const isSelected = idx === formValues.plan;
                return (
                  <Box key={plan.title}>
                    <PlanItem
                      {...plan}
                      unit={paymentInterval}
                      selected={isSelected}
                      onSelect={() => setFormValue("plan", idx)}
                    />
                  </Box>
                );
              })}
            </Box>
          </Container>
        </ParallaxLayer>

        {/* Second step */}
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            overflowY: "auto",
          }}
        >
          <Container
            sx={{
              maxWidth: 1440,
              p: { xs: "50px 20px", md: "0px 118px" },
              pt: "56px",
            }}
          >
            <Title />
            <Box sx={{ mt: "20px" }}>
              <Button onClick={() => setFormValue("plan", undefined)}>
                Go back
              </Button>
            </Box>
            <Box
              sx={{
                mt: "36px",
                mb: "36px",
                display: "flex",
                gap: "32px",
              }}
            >
              {typeof formValues.plan !== "undefined" && (
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <PlanItem
                    {...plans[formValues.plan as number]}
                    unit={paymentInterval}
                    onSelect={() => {
                      setFormValue("plan", undefined);
                    }}
                    selected
                  />
                </Box>
              )}
              <form
                style={{ flex: 1 }}
                action="https://www.example.com"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();

                  const newFormErrors = { ...initialFormErrors };
                  if (!formValues.email || !emailRegex.test(formValues.email))
                    newFormErrors.email = true;
                  if (!formValues.age) newFormErrors.age = true;

                  // Gender is selected by default, would need to be manually overridden to not contain a value.

                  setFormErrors(newFormErrors);

                  const hasErrors = Object.values(newFormErrors).some(
                    (element) => element
                  );

                  if (hasErrors) {
                    setFormErrorSnackbarOpen(true);
                    return;
                  }

                  e.currentTarget.submit();
                  return;

                  fetch("https://www.example.com", {
                    method: "POST",
                    body: JSON.stringify(formValues),
                  })
                    .then((res) => {
                      if (res.ok) return res.json();
                    })
                    .then((result) => {
                      console.log({ result });
                    })
                    .catch((err) => {
                      alert(
                        "Data submitted through ajax, but the domain could not be reached."
                      );
                    });
                }}
              >
                <Box
                  sx={{
                    p: "48px",
                    background: "#FCFCFC",
                    boxShadow:
                      "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <TextInput
                    name="email"
                    type="email"
                    label="What's your email?"
                    value={formValues.email}
                    onChange={(value) => setFormValue("email", value)}
                    error={
                      formErrors.email
                        ? "Please enter a valid email address"
                        : undefined
                    }
                  />
                  <TextInput
                    name="age"
                    type="number"
                    label="How old are you?"
                    value={formValues.age}
                    onChange={(value) => {
                      const parsedValue = parseInt(value);
                      if (isNaN(parsedValue)) return setFormValue("age", "");

                      if (parsedValue >= 0) {
                        setFormValue("age", value);
                      }
                    }}
                    inputProps={{ min: 0 }}
                    error={
                      formErrors.age ? "Please enter a valid age" : undefined
                    }
                  />
                  <RadioInput
                    name="gender"
                    label="Gender"
                    value={formValues.gender}
                    options={[
                      { label: "Female", value: "female" },
                      { label: "Male", value: "male" },
                      { label: "Other", value: "other" },
                    ]}
                    onChange={(value) => setFormValue("gender", value)}
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Container>
        </ParallaxLayer>
      </Parallax>
      <Snackbar
        open={formErrorSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setFormErrorSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setFormErrorSnackbarOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Form contains errors.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
