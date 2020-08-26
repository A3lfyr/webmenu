function openDashboard() {
    pannels = getSettingsPanels();
    pannels.array.forEach(element => {
      element.classList.remove("settings-panel-active");
    });
    dashboard = document.getElementById("settings-general-dashboard");
    dashboard.classList.add("settings-panel-active");

  }

  function getSettingsPanels() {
    dashboard = document.getElementById("settings-general-dashboard");
    module = document.getElementById("settings-general-modules");
    background = document.getElementById("settings-apparence-background");
    dev = document.getElementById("settings-credit-developpment");
    api = document.getElementById("settings-credit-api");
    pannels = Array(dashboard, module, background, dev, api);
    return pannels;
  }

  function getSettingsButtons() {
    dashboardButton = document.getElementById("settings-general-dashboard-button");
    moduleButton = document.getElementById("settings-general-modules-button");
    backgroundButton = document.getElementById("settings-apparence-background-button");
    devButton = document.getElementById("settings-credit-developpment-button");
    apiButton = document.getElementById("settings-credit-api-button");
    pannelsButton = Array(dashboardButton, moduleButton, backgroundButton, devButton, apiButton);
    return pannels;
  }