export const selectRadio = async (form, value) => {
  for (const radio of await form) {
    const element = await radio.getValue();
    if (element === value) {
      await radio.click();
      break;
    }
  }
};

export const setText = async (form, text) => {
  await (await form).setValue(text);
};

export const setDropdown = async (form, text) => {
  await (await form).selectByAttribute("value", text);
};

export const setDropdownVisibleText = async (form, text) => {
  await (await form).selectByVisibleText(text);
};

export const click = async (button) => {
  await (await button).click();
};

export const setStartEndDate = async (
  formStartDate,
  formEndDate,
  popUpCalendar
) => {
  await formStartDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[3].$$("td")[4].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
  await browser.pause(3000);

  await formEndDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[5].$$("td")[2].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};

export const setStartDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[4].$$("td")[2].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};

export const setEndDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[4].$$("td")[2].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};
