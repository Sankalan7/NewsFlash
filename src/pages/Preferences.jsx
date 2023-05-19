import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Preferences = () => {
  const notifyAddSuccess = () => {
    toast.success("Pereferences successfully added", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyAddWarn = () => {
    toast.warning("Please add at least one field", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notifyAddError = () => {
    toast.error("Something went wrong.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyUpdateSuccess = () => {
    toast.success("Pereferences successfully updated", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyUpdateWarn = () => {
    toast.warning("Please add at least one field", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const notifyUpdateError = () => {
    toast.error("Something went wrong.", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyDeleteSuccess = () => {
    toast.success("Pereferences successfully deleted", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifyDeleteError = () => {
    toast.error("Something went wrong", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const [userDetails, setUserDetails] = useState({});

  const [categories, setCategories] = useState({
    business: false,
    entertainment: false,
    general: false,
    health: false,
    science: false,
    sports: false,
    technology: false,
  });

  const navigate = useNavigate();

  const [categoriesPreferences, setCategoriesPreferences] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userDetailsResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/auth/user-details`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await userDetailsResponse.json();
        setUserDetails(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userDetails.id) {
      const getCategoriesPreferences = async () => {
        try {
          const getCategoriesPreferencesResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getCategoriesByUserId/${userDetails.id}`
          );
          const data = await getCategoriesPreferencesResponse.json();
          if (data != null) setCategoriesPreferences(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      getCategoriesPreferences();
    }
  }, [userDetails]);

  useEffect(() => {
    // Check if categoriesPreferences has been set
    if (categoriesPreferences && categoriesPreferences.preference) {
      const preferences = categoriesPreferences.preference;
      const newCategories = { ...categories };

      // Map through preferences and update newCategories
      preferences.forEach((pref) => {
        if (newCategories.hasOwnProperty(pref)) {
          newCategories[pref] = true;
        }
      });

      // Set the updated categories state
      setCategories(newCategories);
    }
  }, [categoriesPreferences]);

  const getCategoriesPreferences = async () => {
    try {
      const getCategoriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getCategoriesByUserId/${userDetails.id}`
      );
      const data = await getCategoriesPreferencesResponse.json();
      setCategoriesPreferences(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoriesCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: checked,
    }));
  };

  const addCategoriesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(categories).filter(
      (key) => categories[key]
    );
    const formJson = {
      type: "categories",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    // console.log(JSON.stringify(formJson));
    if (preferenceArray?.length > 0) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await response.json();
        console.log(data);
        getCategoriesPreferences();
        notifyAddSuccess();
      } catch (error) {
        console.error(error);
        notifyAddError();
      }
    } else {
      notifyAddWarn();
    }
  };

  const updateCategoriesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(categories).filter(
      (key) => categories[key]
    );
    const formJson = {
      type: "categories",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    if (preferenceArray?.length > 0) {
      try {
        const updateCategoriesPreferencesResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/update/${categoriesPreferences.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await updateCategoriesPreferencesResponse.json();
        console.log(data);
        getCategoriesPreferences();
        notifyUpdateSuccess();
      } catch (error) {
        console.error(error);
        notifyUpdateError();
      }
    } else {
      notifyUpdateWarn();
    }
  };

  const deleteCategoriesPreferences = async () => {
    try {
      const deleteCategoriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/delete/${categoriesPreferences.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteCategoriesPreferencesResponse);
      notifyDeleteSuccess();
      getCategoriesPreferences();
      setCategories({
        business: false,
        entertainment: false,
        general: false,
        health: false,
        science: false,
        sports: false,
        technology: false,
      });
      window.location.reload();
    } catch (error) {
      notifyDeleteError();
      console.error(error);
    }
  };

  const handleCategoriesSubmit =
    categoriesPreferences && Object.keys(categoriesPreferences).length > 0
      ? updateCategoriesPreferences
      : addCategoriesPreferences;

  const [sources, setSources] = useState({
    "bbc-news": false,
    "business-insider": false,
    buzzfeed: false,
    cnn: false,
    "espn-cric-info": false,
    espn: false,
    "fox-news": false,
    "the-times-of-india": false,
    "the-verge": false,
    wired: false,
  });

  const [sourcesPreferences, setSourcesPreferences] = useState({});

  useEffect(() => {
    if (userDetails.id) {
      const getSourcesPreference = async () => {
        try {
          const getSourcesPreferenceResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getSourcesByUserId/${userDetails.id}`
          );
          const data = await getSourcesPreferenceResponse.json();
          if (data != null) setSourcesPreferences(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      getSourcesPreference();
    }
  }, [userDetails]);

  useEffect(() => {
    if (sourcesPreferences && sourcesPreferences.preference) {
      const preferences = sourcesPreferences.preference;
      const updatedSources = { ...sources }; // create a new copy of the state object
      preferences.forEach((pref) => {
        if (updatedSources.hasOwnProperty(pref)) {
          updatedSources[pref] = true;
        }
      });
      setSources(updatedSources); // update the state with the updated object
    }
  }, [sourcesPreferences]);

  const getSourcesPreferences = async () => {
    try {
      const getSourcesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getSourcesByUserId/${userDetails.id}`
      );
      const data = await getSourcesPreferencesResponse.json();
      setSourcesPreferences(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSourcesCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSources((prevSources) => ({
      ...prevSources,
      [name]: checked,
    }));
  };

  const addSourcesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(sources).filter((key) => sources[key]);
    const formJson = {
      type: "sources",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    // console.log(JSON.stringify(formJson));
    if (preferenceArray?.length > 0) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await response.json();
        console.log(data);
        getSourcesPreferences();
        notifyAddSuccess();
      } catch (error) {
        console.error(error);
        notifyAddError();
      }
    } else {
      notifyAddWarn();
    }
  };

  const updateSourcesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(sources).filter((key) => sources[key]);
    const formJson = {
      type: "sources",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    if (preferenceArray?.length > 0) {
      try {
        const updateSourcesPreferencesResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/update/${sourcesPreferences.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await updateSourcesPreferencesResponse.json();
        console.log(data);
        getSourcesPreferences();
        notifyUpdateSuccess();
      } catch (error) {
        console.error(error);
        notifyUpdateError();
      }
    } else {
      notifyUpdateWarn();
    }
  };

  const deleteSourcesPreferences = async () => {
    try {
      const deleteSourcesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/delete/${sourcesPreferences.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteSourcesPreferencesResponse);
      notifyDeleteSuccess();
      getSourcesPreferences();
      setCategories({
        "bbc-news": false,
        "business-insider": false,
        buzzfeed: false,
        cnn: false,
        "espn-cric-info": false,
        espn: false,
        "fox-news": false,
        "the-times-of-india": false,
        "the-verge": false,
        wired: false,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
      notifyDeleteError();
    }
  };

  const handleSourcesSubmit =
    sourcesPreferences && Object.keys(sourcesPreferences).length > 0
      ? updateSourcesPreferences
      : addSourcesPreferences;

  const [countries, setCountries] = useState({
    au: false,
    br: false,
    cn: false,
    de: false,
    fr: false,
    gb: false,
    in: false,
    jp: false,
    ru: false,
    ua: false,
    us: false,
  });

  const [countriesPreferences, setCountriesPreferences] = useState({});

  useEffect(() => {
    if (userDetails.id) {
      const getCountriesPreference = async () => {
        try {
          const getCountriesPreferenceResponse = await fetch(
            `${process.env.REACT_APP_backend_baseURL}/preferences/getCountriesByUserId/${userDetails.id}`
          );
          const data = await getCountriesPreferenceResponse.json();
          if (data != null) setCountriesPreferences(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
      getCountriesPreference();
    }
  }, [userDetails]);

  useEffect(() => {
    if (countriesPreferences && countriesPreferences.preference) {
      const preferences = countriesPreferences.preference;
      const updatedCountries = { ...countries }; // create a new copy of the state object
      preferences.forEach((pref) => {
        if (updatedCountries.hasOwnProperty(pref)) {
          updatedCountries[pref] = true;
        }
      });
      setCountries(updatedCountries); // update the state with the updated object
    }
  }, [countriesPreferences]);

  const getCountriesPreferences = async () => {
    try {
      const getCountriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/getCountriesByUserId/${userDetails.id}`
      );
      const data = await getCountriesPreferencesResponse.json();
      setCountriesPreferences(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCountriesCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCountries((prevCountries) => ({
      ...prevCountries,
      [name]: checked,
    }));
  };

  const addCountriesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(countries).filter(
      (key) => countries[key]
    );
    const formJson = {
      type: "countries",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    // console.log(JSON.stringify(formJson));
    if (preferenceArray?.length > 0) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await response.json();
        console.log(data);
        getCountriesPreferences();
        notifyAddSuccess();
      } catch (error) {
        console.error(error);
        notifyAddError();
      }
    } else {
      notifyAddWarn();
    }
  };

  const updateCountriesPreferences = async (event) => {
    event.preventDefault();
    const preferenceArray = Object.keys(countries).filter(
      (key) => countries[key]
    );
    const formJson = {
      type: "countries",
      preference: preferenceArray,
      userId: userDetails.id,
    };
    if (preferenceArray?.length > 0) {
      try {
        const updateCountriesPreferencesResponse = await fetch(
          `${process.env.REACT_APP_backend_baseURL}/preferences/update/${countriesPreferences.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await updateCountriesPreferencesResponse.json();
        console.log(data);
        getCountriesPreferences();
        notifyUpdateSuccess();
      } catch (error) {
        console.error(error);
        notifyUpdateError();
      }
    } else {
      notifyUpdateWarn();
    }
  };

  const deleteCountriesPreferences = async () => {
    try {
      const deleteCountriesPreferencesResponse = await fetch(
        `${process.env.REACT_APP_backend_baseURL}/preferences/delete/${countriesPreferences.id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteCountriesPreferencesResponse);
      notifyDeleteSuccess();
      getCountriesPreferences();

      setCountries({
        au: false,
        br: false,
        cn: false,
        de: false,
        fr: false,
        gb: false,
        in: false,
        jp: false,
        ru: false,
        ua: false,
        us: false,
      });
      // window.location.reload();
    } catch (error) {
      notifyDeleteError();
      console.error(error);
    }
  };

  const handleCountriesSubmit =
    countriesPreferences && Object.keys(countriesPreferences).length > 0
      ? updateCountriesPreferences
      : addCountriesPreferences;

  return (
    <>
      <div className="container mx-auto w-full py-8 flex flex-col justify-center bg-gray-800">
        <div className="px-6 text-4xl text-white font-yanone flex flex-row justify-center">
          <span>Choose your preferences. </span>
          <NavLink exact="true" to="/for-you">
            <span className="text-blue-500 underline mx-2">'For you'</span>
          </NavLink>
          <span> page will be based upon your selection</span>
        </div>
      </div>
      <div className="container mx-auto w-full py-8 flex flex-col justify-center border-b-2 border-gray-500 bg-gradient-to-r from-[#D6FF7F] to-[#00B3CC]">
        <h2 className="text-3xl font-cormorant font-bold mb-12 text-center">
          Categories
        </h2>
        <form onSubmit={handleCategoriesSubmit}>
          <div className="flex flex-col justify-center items-center font-maven">
            <div className="grid grid-cols-4 gap-4 justify-center mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="business"
                  checked={categories.business}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Business</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="entertainment"
                  checked={categories.entertainment}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Entertainment</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="general"
                  checked={categories.general}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">General</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="health"
                  checked={categories.health}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Health</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="science"
                  checked={categories.science}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Science</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="sports"
                  checked={categories.sports}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Sports</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="technology"
                  checked={categories.technology}
                  onChange={handleCategoriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Technology</span>
              </label>
            </div>
            {categoriesPreferences &&
            Object.keys(categoriesPreferences).length === 0 ? (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-4"
              >
                Submit
              </button>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 mt-4 mr-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={deleteCategoriesPreferences}
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 mt-4"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      <div className="container mx-auto w-full py-8 flex flex-col justify-center border-b-2 border-gray-500 bg-gradient-to-r from-[#9055FF] to-[#13E2DA]">
        <h2 className="text-3xl font-cormorant font-bold mb-12 text-center">
          Sources
        </h2>
        <form onSubmit={handleSourcesSubmit}>
          <div className="flex flex-col justify-center items-center font-maven">
            <div className="grid grid-cols-4 gap-4 justify-center mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="bbc-news"
                  checked={sources["bbc-news"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">BBC News</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="business-insider"
                  checked={sources["business-insider"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Business Insider</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="buzzfeed"
                  checked={sources.buzzfeed}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Buzzfeed</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="cnn"
                  checked={sources.cnn}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">CNN</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="espn-cric-info"
                  checked={sources["espn-cric-info"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">CricInfo</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="espn"
                  checked={sources.espn}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">ESPN</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fox-news"
                  checked={sources["fox-news"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Fox News</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="the-times-of-india"
                  checked={sources["the-times-of-india"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">The Times Of India</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="the-verge"
                  checked={sources["the-verge"]}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">The Verge</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="wired"
                  checked={sources.wired}
                  onChange={handleSourcesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Wired</span>
              </label>
            </div>
            {sourcesPreferences &&
            Object.keys(sourcesPreferences).length === 0 ? (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-4"
              >
                Submit
              </button>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 mt-4 mr-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={deleteSourcesPreferences}
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 mt-4"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>

      <div className="container mx-auto w-full py-8 flex flex-col justify-center border-b-2 border-gray-500 bg-gradient-to-r from-[#F06966] to-[#FAD6A6]">
        <h2 className="text-3xl font-cormorant font-bold mb-12 text-center">
          Countries
        </h2>
        <form onSubmit={handleCountriesSubmit}>
          <div className="flex flex-col justify-center items-center font-maven">
            <div className="grid grid-cols-4 gap-4 justify-center mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="au"
                  checked={countries.au}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Australia</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="br"
                  checked={countries.br}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Brazil</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="cn"
                  checked={countries.cn}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">China</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="de"
                  checked={countries.de}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Germany</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fr"
                  checked={countries.fr}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">France</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="gb"
                  checked={countries.gb}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">United Kingdom</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="in"
                  checked={countries.in}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">India</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="jp"
                  checked={countries.jp}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Japan</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ru"
                  checked={countries.ru}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Russia</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ua"
                  checked={countries.ua}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">Ukraine</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="us"
                  checked={countries.us}
                  onChange={handleCountriesCheckboxChange}
                  className="mr-2 rounded-full border-gray-400 focus:outline-none"
                />
                <span className="text-lg font-medium">United States</span>
              </label>
            </div>
            {countriesPreferences &&
            Object.keys(countriesPreferences).length === 0 ? (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 mt-4"
              >
                Submit
              </button>
            ) : (
              <>
                <div className="flex flex-row justify-center items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 mt-4 mr-4"
                  >
                    Update
                  </button>
                  <button
                    onClick={deleteCountriesPreferences}
                    type="button"
                    className="bg-red-500 text-white py-2 px-4 mt-4"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Preferences;
