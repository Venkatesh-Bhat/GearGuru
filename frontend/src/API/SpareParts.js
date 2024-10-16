// import axios from "axios";

const data = {
  parttypes: [
    {
      id: "12-volt-accessory-power-outlet",
      name: "12 Volt Accessory Power Outlet",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "12-volt-accessory-power-outlet-connector",
      name: "12 Volt Accessory Power Outlet Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "12-volt-accessory-power-outlet-cover",
      name: "12 Volt Accessory Power Outlet Cover",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "12-volt-accessory-power-outlet-socket",
      name: "12 Volt Accessory Power Outlet Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-actuator",
      name: "4WD Actuator",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-actuator-connector",
      name: "4WD Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-actuator-valve",
      name: "4WD Actuator Valve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-control-switch-connector",
      name: "4WD Control Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-disconnect-switch-connector",
      name: "4WD Disconnect Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-hub-locking-solenoid",
      name: "4WD Hub Locking Solenoid",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-hub-locking-solenoid-connector",
      name: "4WD Hub Locking Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-indicator-light-connector",
      name: "4WD Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-indicator-light-switch",
      name: "4WD Indicator Light Switch",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-indicator-light-switch-connector",
      name: "4WD Indicator Light Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "4wd-switch",
      name: "4WD Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator",
      name: "A/C Accumulator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator-fitting-o-ring",
      name: "A/C Accumulator Fitting O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator-hose-seal",
      name: "A/C Accumulator Hose Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator-hose-sleeve",
      name: "A/C Accumulator Hose Sleeve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator-tube-o-ring",
      name: "A/C Accumulator Tube O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-accumulator-with-hose-assembly",
      name: "A/C Accumulator with Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-and-heater-control-light-connector",
      name: "A/C and Heater Control Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ac-and-heater-control-vacuum-source-hose-check-valve",
      name: "A/C and Heater Control Vacuum Source Hose Check Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-clutch-control-relay-harness-connector",
      name: "A/C Clutch Control Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-clutch-cycle-switch",
      name: "A/C Clutch Cycle Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-clutch-cycle-switch-connector",
      name: "A/C Clutch Cycle Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-clutch-cycle-switch-o-ring",
      name: "A/C Clutch Cycle Switch O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-clutch-relay",
      name: "A/C Clutch Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor",
      name: "A/C Compressor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-bearing",
      name: "A/C Compressor Bearing",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-bypass-pulley",
      name: "A/C Compressor Bypass Pulley",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch",
      name: "A/C Compressor Clutch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-bearing",
      name: "A/C Compressor Clutch Bearing",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-coil",
      name: "A/C Compressor Clutch Coil",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-connector",
      name: "A/C Compressor Clutch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-control-harness-ground-connector",
      name: "A/C Compressor Clutch Control Harness Ground Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-hold-in-relay-harness-connector",
      name: "A/C Compressor Clutch Hold-In Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-hub",
      name: "A/C Compressor Clutch Hub",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-pulley",
      name: "A/C Compressor Clutch Pulley",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-relay",
      name: "A/C Compressor Clutch Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-relay-connector",
      name: "A/C Compressor Clutch Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-clutch-shim",
      name: "A/C Compressor Clutch Shim",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-connector",
      name: "A/C Compressor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-control-relay",
      name: "A/C Compressor Control Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-control-valve",
      name: "A/C Compressor Control Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-cut-off-relay",
      name: "A/C Compressor Cut-Off Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-cut-off-relay-connector",
      name: "A/C Compressor Cut-Off Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-cut-off-relay-harness-connector",
      name: "A/C Compressor Cut-Off Relay Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-cut-off-switch",
      name: "A/C Compressor Cut-Off Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-cut-off-switch-harness-connector",
      name: "A/C Compressor Cut-Off Switch Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-gasket",
      name: "A/C Compressor Gasket",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-hold-relay",
      name: "A/C Compressor Hold Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-hose-seal",
      name: "A/C Compressor Hose Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-kit",
      name: "A/C Compressor Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-port-o-ring",
      name: "A/C Compressor Port O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-pressure-delay-switch",
      name: "A/C Compressor Pressure Delay Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-pressure-relief-valve-o-ring",
      name: "A/C Compressor Pressure Relief Valve O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-relay-connector",
      name: "A/C Compressor Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-relay-harness-connector",
      name: "A/C Compressor Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-relief-valve",
      name: "A/C Compressor Relief Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-seal",
      name: "A/C Compressor Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-switch-connector",
      name: "A/C Compressor Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-throttle-cut-off-relay",
      name: "A/C Compressor Throttle Cut-Off Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-throttle-cut-off-relay-connector",
      name: "A/C Compressor Throttle Cut-Off Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-throttle-cut-off-relay-harness-connector",
      name: "A/C Compressor Throttle Cut-Off Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-time-delay-relay",
      name: "A/C Compressor Time Delay Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-time-delay-relay-harness-connector",
      name: "A/C Compressor Time Delay Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-variable-displacement-connector",
      name: "A/C Compressor Variable Displacement Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-water-valve-solenoid-connector",
      name: "A/C Compressor Water Valve Solenoid Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-wiring-harness",
      name: "A/C Compressor Wiring Harness",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-compressor-wiring-harness-strap",
      name: "A/C Compressor Wiring Harness Strap",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser",
      name: "A/C Condenser",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-assembly",
      name: "A/C Condenser Fan Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-control-relay-harness-connector",
      name: "A/C Condenser Fan Control Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-motor",
      name: "A/C Condenser Fan Motor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-motor-connector",
      name: "A/C Condenser Fan Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-motor-relay",
      name: "A/C Condenser Fan Motor Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-shroud-mount",
      name: "A/C Condenser Fan Shroud Mount",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-switch",
      name: "A/C Condenser Fan Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fan-switch-harness-connector",
      name: "A/C Condenser Fan Switch Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-fitting-gasket",
      name: "A/C Condenser Fitting Gasket",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-seal",
      name: "A/C Condenser Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-condenser-tube-o-ring",
      name: "A/C Condenser Tube O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-discharge-line-hose-assembly",
      name: "A/C Discharge Line Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-drive-belt-tensioner",
      name: "A/C Drive Belt Tensioner",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-case-seal",
      name: "A/C Evaporator Case Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-case-seal-kit",
      name: "A/C Evaporator Case Seal Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core",
      name: "A/C Evaporator Core",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-and-case-assembly",
      name: "A/C Evaporator Core and Case Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-case",
      name: "A/C Evaporator Core Case",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-case-drain-tube",
      name: "A/C Evaporator Core Case Drain Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-kit",
      name: "A/C Evaporator Core Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-seal",
      name: "A/C Evaporator Core Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-core-tube",
      name: "A/C Evaporator Core Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-drain",
      name: "A/C Evaporator Drain",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-fitting-gasket",
      name: "A/C Evaporator Fitting Gasket",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-hose",
      name: "A/C Evaporator Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-temperature-sensor",
      name: "A/C Evaporator Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-temperature-sensor-connector",
      name: "A/C Evaporator Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-tube-o-ring",
      name: "A/C Evaporator Tube O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-evaporator-tube-seal",
      name: "A/C Evaporator Tube Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve",
      name: "A/C Expansion Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-hardware-kit",
      name: "A/C Expansion Valve Hardware Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-kit",
      name: "A/C Expansion Valve Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-o-ring",
      name: "A/C Expansion Valve O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-seal",
      name: "A/C Expansion Valve Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-seal-kit",
      name: "A/C Expansion Valve Seal Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-expansion-valve-tube",
      name: "A/C Expansion Valve Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-hose-assembly",
      name: "A/C Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-hose-assembly-seal",
      name: "A/C Hose Assembly Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-hose-assembly-washer",
      name: "A/C Hose Assembly Washer",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-in-line-filter",
      name: "A/C In-Line Filter",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-line-connector",
      name: "A/C Line Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-line-o-ring",
      name: "A/C Line O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-line-o-ring-kit",
      name: "A/C Line O-Ring Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-liquid-line-with-orifice-tube",
      name: "A/C Liquid Line with Orifice Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-manifold-hose-assembly",
      name: "A/C Manifold Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-manifold-seal",
      name: "A/C Manifold Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-manifold-seal-kit",
      name: "A/C Manifold Seal Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-orifice-tube",
      name: "A/C Orifice Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-orifice-tube-o-ring",
      name: "A/C Orifice Tube O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-pressure-transducer-connector",
      name: "A/C Pressure Transducer Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier",
      name: "A/C Receiver Drier",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier-desiccant-element",
      name: "A/C Receiver Drier / Desiccant Element",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier-desiccant-element-filter",
      name: "A/C Receiver Drier / Desiccant Element Filter",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier-kit",
      name: "A/C Receiver Drier Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier-tube",
      name: "A/C Receiver Drier Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-receiver-drier-with-hose-assembly",
      name: "A/C Receiver Drier with Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-discharge-suction-hose-assembly",
      name: "A/C Refrigerant Discharge / Suction Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-discharge-hose",
      name: "A/C Refrigerant Discharge Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-hose",
      name: "A/C Refrigerant Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-hose-fitting",
      name: "A/C Refrigerant Hose Fitting",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-line-bolt",
      name: "A/C Refrigerant Line Bolt",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-liquid-hose",
      name: "A/C Refrigerant Liquid Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-pressure-sensor",
      name: "A/C Refrigerant Pressure Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-pressure-sensor-o-ring",
      name: "A/C Refrigerant Pressure Sensor O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-suction-hose",
      name: "A/C Refrigerant Suction Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-refrigerant-temperature-sensor",
      name: "A/C Refrigerant Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-selector-switch",
      name: "A/C Selector Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-port-repair-kit",
      name: "A/C Service Port Repair Kit",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-valve",
      name: "A/C Service Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-valve-cap",
      name: "A/C Service Valve Cap",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-valve-core",
      name: "A/C Service Valve Core",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-valve-fitting-cap",
      name: "A/C Service Valve Fitting Cap",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-service-valve-o-ring",
      name: "A/C Service Valve O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-suction-line-hose-assembly",
      name: "A/C Suction Line Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-system-o-ring-and-gasket-kit",
      name: "A/C System O-Ring and Gasket Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-system-valve-core",
      name: "A/C System Valve Core",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ac-vacuum-hose",
      name: "A/C Vacuum Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "abs-control-module",
      name: "ABS Control Module",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-control-module-connector",
      name: "ABS Control Module Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-control-module-relay-connector",
      name: "ABS Control Module Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-control-relay",
      name: "ABS Control Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-harness-connector",
      name: "ABS Harness Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-indicator-light-relay",
      name: "ABS Indicator Light Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-indicator-light-relay-connector",
      name: "ABS Indicator Light Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-modulator-relay-connector",
      name: "ABS Modulator Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-modulator-sensor-connector",
      name: "ABS Modulator Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-modulator-valve",
      name: "ABS Modulator Valve",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-pump-connector",
      name: "ABS Pump Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-relay",
      name: "ABS Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-relay-connector",
      name: "ABS Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-switch-connector",
      name: "ABS Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-wheel-speed-sensor",
      name: "ABS Wheel Speed Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-wheel-speed-sensor-connector",
      name: "ABS Wheel Speed Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-wheel-speed-sensor-tone-ring",
      name: "ABS Wheel Speed Sensor Tone Ring",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "abs-wheel-speed-sensor-wiring-harness",
      name: "ABS Wheel Speed Sensor Wiring Harness",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "acceleration-sensor-connector",
      name: "Acceleration Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal",
      name: "Accelerator Pedal",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal-assembly",
      name: "Accelerator Pedal Assembly",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal-bushing",
      name: "Accelerator Pedal Bushing",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal-sensor",
      name: "Accelerator Pedal Sensor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal-sensor-connector",
      name: "Accelerator Pedal Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-pedal-stop-pad",
      name: "Accelerator Pedal Stop Pad",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accelerator-relay",
      name: "Accelerator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-delay-relay",
      name: "Accessory Delay Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-delay-relay-connector",
      name: "Accessory Delay Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt",
      name: "Accessory Drive Belt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt-idler-pulley",
      name: "Accessory Drive Belt Idler Pulley",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt-idler-pulley-adjustment-bolt-kit",
      name: "Accessory Drive Belt Idler Pulley Adjustment Bolt Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt-tensioner",
      name: "Accessory Drive Belt Tensioner",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt-tensioner-assembly",
      name: "Accessory Drive Belt Tensioner Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-drive-belt-tensioner-pulley",
      name: "Accessory Drive Belt Tensioner Pulley",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-power-module-connector",
      name: "Accessory Power Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-power-receptacle-connector",
      name: "Accessory Power Receptacle Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-power-receptacle-relay",
      name: "Accessory Power Receptacle Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-power-relay",
      name: "Accessory Power Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-power-relay-connector",
      name: "Accessory Power Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-relay-center-connector",
      name: "Accessory Relay Center Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-safety-relay",
      name: "Accessory Safety Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-safety-relay-connector",
      name: "Accessory Safety Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-switch",
      name: "Accessory Switch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "accessory-wiring-junction-block-connector",
      name: "Accessory Wiring Junction Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "active-suspension-accumulator",
      name: "Active Suspension Accumulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "active-suspension-accumulator-mount",
      name: "Active Suspension Accumulator Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "active-suspension-relay",
      name: "Active Suspension Relay",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "active-suspension-relay-connector",
      name: "Active Suspension Relay Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "active-suspension-return-reservoir-mount",
      name: "Active Suspension Return Reservoir Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "active-torque-control-coupling-solenoid-connector",
      name: "Active Torque Control Coupling Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-pedal-actuator-connector",
      name: "Adjustable Pedal Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-pedal-motor-connector",
      name: "Adjustable Pedal Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-pedal-relay",
      name: "Adjustable Pedal Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-pedal-sensor-connector",
      name: "Adjustable Pedal Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-pedal-switch-connector",
      name: "Adjustable Pedal Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "adjustable-torsion-bar-key",
      name: "Adjustable Torsion Bar Key",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-fuel-ratio-sensor",
      name: "Air / Fuel Ratio Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-arming-sensor-connector",
      name: "Air Bag Arming Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-clockspring",
      name: "Air Bag Clockspring",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-control-module-bolt",
      name: "Air Bag Control Module Bolt",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-diagnostic-module-connector",
      name: "Air Bag Diagnostic Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-impact-sensor",
      name: "Air Bag Impact Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-impact-sensor-bolt",
      name: "Air Bag Impact Sensor Bolt",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-impact-sensor-connector",
      name: "Air Bag Impact Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-module-connector",
      name: "Air Bag Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-passenger-sensor-connector",
      name: "Air Bag Passenger Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-relay",
      name: "Air Bag Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-relay-connector",
      name: "Air Bag Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-seat-position-sensor-connector",
      name: "Air Bag Seat Position Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-sensor-connector",
      name: "Air Bag Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-side-impact-module-connector",
      name: "Air Bag Side Impact Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-side-impact-sensor-connector",
      name: "Air Bag Side Impact Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-wiring-harness-connector",
      name: "Air Bag Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-bag-wiring-harness-strap",
      name: "Air Bag Wiring Harness Strap",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-brake-cap-bolt",
      name: "Air Brake Cap Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "air-brake-pressure-switch",
      name: "Air Brake Pressure Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "air-brake-pressure-switch-connector",
      name: "Air Brake Pressure Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "air-charge-temperature-sensor",
      name: "Air Charge Temperature Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "air-charge-temperature-sensor-connector",
      name: "Air Charge Temperature Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-check-valve-connector",
      name: "Air Cleaner Check Valve Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-door-solenoid-relay-connector",
      name: "Air Cleaner Door Solenoid Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-fastener",
      name: "Air Cleaner Fastener",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-mount",
      name: "Air Cleaner Mount",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-mounting-gasket",
      name: "Air Cleaner Mounting Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-cleaner-temperature-sensor",
      name: "Air Cleaner Temperature Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-control-valve-relay",
      name: "Air Control Valve Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-control-valve-relay-connector",
      name: "Air Control Valve Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "air-filter-indicator",
      name: "Air Filter Indicator",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-filter-set",
      name: "Air Filter Set",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "air-shock-absorber",
      name: "Air Shock Absorber",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-compressor",
      name: "Air Suspension Compressor",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-compressor-dryer-vibration-isolator-kit",
      name: "Air Suspension Compressor / Dryer Vibration Isolator Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-compressor-line-repair-kit",
      name: "Air Suspension Compressor Line Repair Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-compressor-motor-connector",
      name: "Air Suspension Compressor Motor Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-compressor-relay-connector",
      name: "Air Suspension Compressor Relay Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-solenoid-connector",
      name: "Air Suspension Solenoid Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-spring",
      name: "Air Suspension Spring",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-strut",
      name: "Air Suspension Strut",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "air-suspension-switch-connector",
      name: "Air Suspension Switch Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alarm-chime-relay",
      name: "Alarm Chime Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-cam-bolt",
      name: "Alignment Cam Bolt",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-cam-bolt-kit",
      name: "Alignment Cam Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-cam-guide-pin",
      name: "Alignment Cam Guide Pin",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-cam-plate-kit",
      name: "Alignment Cam Plate Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-bolt-kit",
      name: "Alignment Camber / Toe Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-cam-bolt",
      name: "Alignment Camber / Toe Cam Bolt",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-cam-bolt-kit",
      name: "Alignment Camber / Toe Cam Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-kit",
      name: "Alignment Camber / Toe Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-shim",
      name: "Alignment Camber / Toe Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-adjusting-eccentric",
      name: "Alignment Camber Adjusting Eccentric",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-ball-joint",
      name: "Alignment Camber Ball Joint",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-bushing",
      name: "Alignment Camber Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-bushing-kit",
      name: "Alignment Camber Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-caster-plate",
      name: "Alignment Camber Caster Plate",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-kit",
      name: "Alignment Camber Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-lateral-link",
      name: "Alignment Camber Lateral Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-plate",
      name: "Alignment Camber Plate",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-plate-kit",
      name: "Alignment Camber Plate Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-shim",
      name: "Alignment Camber Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-shim-kit",
      name: "Alignment Camber Shim Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-camber-toe-bushing-kit",
      name: "Alignment Camber Toe Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-bushing",
      name: "Alignment Caster / Camber Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-bushing-kit",
      name: "Alignment Caster / Camber Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-cam",
      name: "Alignment Caster / Camber Cam",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-cam-bolt",
      name: "Alignment Caster / Camber Cam Bolt",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-cam-bolt-kit",
      name: "Alignment Caster / Camber Cam Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-cam-kit",
      name: "Alignment Caster / Camber Cam Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-kit",
      name: "Alignment Caster / Camber Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-shim",
      name: "Alignment Caster / Camber Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-camber-tool",
      name: "Alignment Caster / Camber Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-pinion-angle-bolt-kit",
      name: "Alignment Caster / Pinion Angle Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-bushing",
      name: "Alignment Caster Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-kit",
      name: "Alignment Caster Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-shim",
      name: "Alignment Caster Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-caster-shim-kit",
      name: "Alignment Caster Shim Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-kit",
      name: "Alignment Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-shim",
      name: "Alignment Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-thrust-plate",
      name: "Alignment Thrust Plate",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-adjuster",
      name: "Alignment Toe Adjuster",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-adjusting-kit",
      name: "Alignment Toe Adjusting Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-arm",
      name: "Alignment Toe Arm",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-bushing-kit",
      name: "Alignment Toe Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-shim",
      name: "Alignment Toe Shim",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "alignment-toe-wrench",
      name: "Alignment Toe Wrench",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "alternator",
      name: "Alternator",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-bearing",
      name: "Alternator Bearing",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-cable",
      name: "Alternator Cable",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-capacitor",
      name: "Alternator Capacitor",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-connector",
      name: "Alternator Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-cooling-hose-seal",
      name: "Alternator Cooling Hose Seal",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-decoupler-pulley",
      name: "Alternator Decoupler Pulley",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "alternator-pulley",
      name: "Alternator Pulley",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "ambient-air-temperature-sensor",
      name: "Ambient Air Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "ambient-air-temperature-sensor-connector",
      name: "Ambient Air Temperature Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ambient-light-sensor",
      name: "Ambient Light Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ambient-light-sensor-connector",
      name: "Ambient Light Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "antenna-mast",
      name: "Antenna Mast",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "antenna-module-wiring-harness-connector",
      name: "Antenna Module Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "antenna-seal",
      name: "Antenna Seal",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-dieseling-relay",
      name: "Anti-Dieseling Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-dieseling-relay-connector",
      name: "Anti-Dieseling Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-alarm-connector",
      name: "Anti-Theft Alarm Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-connector",
      name: "Anti-Theft Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-control-module",
      name: "Anti-Theft Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-cut-off-switch-connector",
      name: "Anti-Theft Cut-Off Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-ignition-tamper-sensor-connector",
      name: "Anti-Theft Ignition Tamper Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-light-connector",
      name: "Anti-Theft Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-module-connector",
      name: "Anti-Theft Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-relay",
      name: "Anti-Theft Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-relay-connector",
      name: "Anti-Theft Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-relay-retainer",
      name: "Anti-Theft Relay Retainer",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "anti-theft-resistor-connector",
      name: "Anti-Theft Resistor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ash-tray-light-bulb",
      name: "Ash Tray Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ash-tray-light-connector",
      name: "Ash Tray Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "audio-video-jack",
      name: "Audio / Video Jack",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "audio-amplifier",
      name: "Audio Amplifier",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "audio-amplifier-relay",
      name: "Audio Amplifier Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "audio-amplifier-relay-connector",
      name: "Audio Amplifier Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auto-light-module-connector",
      name: "Auto Light Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auto-shut-down-relay",
      name: "Auto Shut Down Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auto-shut-down-relay-connector",
      name: "Auto Shut Down Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-manual-transmission-shift-boot",
      name: "Automatic / Manual Transmission Shift Boot",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-choke-relay-connector",
      name: "Automatic Choke Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-continuously-variable-transmission-cvt-belt",
      name: "Automatic Continuously Variable Transmission (CVT) Belt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-headlight-control-relay",
      name: "Automatic Headlight Control Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-headlight-control-relay-connector",
      name: "Automatic Headlight Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-headlight-control-sensor-connector",
      name: "Automatic Headlight Control Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-accumulator-cover-gasket",
      name: "Automatic Transmission Accumulator Cover Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-adapter-housing-repair-sleeve",
      name: "Automatic Transmission Adapter Housing Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-adapter-housing-seal",
      name: "Automatic Transmission Adapter Housing Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-assembly",
      name: "Automatic Transmission Assembly",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-auxiliary-valve-body-cover-gasket",
      name: "Automatic Transmission Auxiliary Valve Body Cover Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-axle-relay",
      name: "Automatic Transmission Axle Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-axle-relay-connector",
      name: "Automatic Transmission Axle Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-ball-check-valve",
      name: "Automatic Transmission Ball Check Valve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-band",
      name: "Automatic Transmission Band",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-case-cover",
      name: "Automatic Transmission Case Cover",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-case-cover-bolt",
      name: "Automatic Transmission Case Cover Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-case-electrical-connector-o-ring",
      name: "Automatic Transmission Case Electrical Connector O-Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-case-gasket",
      name: "Automatic Transmission Case Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-case-vent",
      name: "Automatic Transmission Case Vent",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-check-valve-ball",
      name: "Automatic Transmission Check Valve Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-backing-plate",
      name: "Automatic Transmission Clutch Backing Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-backing-plate-retaining-ring",
      name: "Automatic Transmission Clutch Backing Plate Retaining Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-blow-off-ball",
      name: "Automatic Transmission Clutch Blow Off Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-inner-roller-race-fluid-seal-ring",
      name: "Automatic Transmission Clutch Inner Roller Race Fluid Seal Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-pack-piston",
      name: "Automatic Transmission Clutch Pack Piston",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-spring",
      name: "Automatic Transmission Clutch Spring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-clutch-wave-plate",
      name: "Automatic Transmission Clutch Wave Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-connector",
      name: "Automatic Transmission Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-indicator-light-connector",
      name: "Automatic Transmission Control Indicator Light Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-position-indicator-relay-connector",
      name: "Automatic Transmission Control Position Indicator Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-shaft-seal",
      name: "Automatic Transmission Control Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-solenoid",
      name: "Automatic Transmission Control Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-solenoid-connector",
      name: "Automatic Transmission Control Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-solenoid-seal",
      name: "Automatic Transmission Control Solenoid Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-control-solenoid-valve-filter-plate",
      name: "Automatic Transmission Control Solenoid Valve Filter Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-cover-bolt",
      name: "Automatic Transmission Cover Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-detent-cable",
      name: "Automatic Transmission Detent Cable",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-detent-cable-seal",
      name: "Automatic Transmission Detent Cable Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-differential-bearing",
      name: "Automatic Transmission Differential Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-differential-race",
      name: "Automatic Transmission Differential Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-differential-seal",
      name: "Automatic Transmission Differential Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-dipstick",
      name: "Automatic Transmission Dipstick",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-dipstick-tube",
      name: "Automatic Transmission Dipstick Tube",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-dipstick-tube-o-ring",
      name: "Automatic Transmission Dipstick Tube O-Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-dipstick-tube-seal",
      name: "Automatic Transmission Dipstick Tube Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-direct-clutch-plate",
      name: "Automatic Transmission Direct Clutch Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-downshift-relay",
      name: "Automatic Transmission Downshift Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-downshift-relay-connector",
      name: "Automatic Transmission Downshift Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-drive-axle-gasket",
      name: "Automatic Transmission Drive Axle Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-drive-axle-seal",
      name: "Automatic Transmission Drive Axle Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-drive-shaft-oil-seal",
      name: "Automatic Transmission Drive Shaft Oil Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-drive-sprocket-bearing",
      name: "Automatic Transmission Drive Sprocket Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-bearing",
      name: "Automatic Transmission Extension Housing Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-bushing",
      name: "Automatic Transmission Extension Housing Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-gasket",
      name: "Automatic Transmission Extension Housing Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-repair-sleeve",
      name: "Automatic Transmission Extension Housing Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-seal",
      name: "Automatic Transmission Extension Housing Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-extension-housing-seal-kit",
      name: "Automatic Transmission Extension Housing Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-filter-o-ring",
      name: "Automatic Transmission Filter O-Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-flexplate",
      name: "Automatic Transmission Flexplate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid",
      name: "Automatic Transmission Fluid",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-filler-cap-locking-pin",
      name: "Automatic Transmission Fluid Filler Cap Locking Pin",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-filler-tube",
      name: "Automatic Transmission Fluid Filler Tube",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-filler-tube-seal",
      name: "Automatic Transmission Fluid Filler Tube Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-pipe-seal",
      name: "Automatic Transmission Fluid Pipe Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-screen",
      name: "Automatic Transmission Fluid Screen",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-temperature-sensor",
      name: "Automatic Transmission Fluid Temperature Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-fluid-temperature-sensor-connector",
      name: "Automatic Transmission Fluid Temperature Sensor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-gasket-set",
      name: "Automatic Transmission Gasket Set",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-gear-position-sensor-connector",
      name: "Automatic Transmission Gear Position Sensor Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-idler-gear-bearing",
      name: "Automatic Transmission Idler Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-indicator-light",
      name: "Automatic Transmission Indicator Light",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-indicator-light-bulb",
      name: "Automatic Transmission Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-indicator-position-decoder-control-connector",
      name: "Automatic Transmission Indicator Position Decoder Control Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-clutch-housing",
      name: "Automatic Transmission Input Clutch Housing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-shaft-bearing",
      name: "Automatic Transmission Input Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-shaft-race",
      name: "Automatic Transmission Input Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-shaft-repair-sleeve",
      name: "Automatic Transmission Input Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-shaft-seal",
      name: "Automatic Transmission Input Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-input-shaft-speed-sensor",
      name: "Automatic Transmission Input Shaft Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-kickdown-solenoid",
      name: "Automatic Transmission Kickdown Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-line-blow-off-ball",
      name: "Automatic Transmission Line Blow Off Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-main-shaft-bearing",
      name: "Automatic Transmission Main Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-main-shaft-seal",
      name: "Automatic Transmission Main Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-manual-control-lever-detent-lever",
      name: "Automatic Transmission Manual Control Lever Detent Lever",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-manual-shaft-seal",
      name: "Automatic Transmission Manual Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-manual-shift-shaft-position-switch",
      name: "Automatic Transmission Manual Shift Shaft Position Switch",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-manual-valve-seal",
      name: "Automatic Transmission Manual Valve Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-modulator-valve",
      name: "Automatic Transmission Modulator Valve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-modulator-valve-seal",
      name: "Automatic Transmission Modulator Valve Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-mount",
      name: "Automatic Transmission Mount",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-mount-bushing",
      name: "Automatic Transmission Mount Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-mount-washer",
      name: "Automatic Transmission Mount Washer",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler",
      name: "Automatic Transmission Oil Cooler",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-bolt",
      name: "Automatic Transmission Oil Cooler Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-control-valve",
      name: "Automatic Transmission Oil Cooler Control Valve",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-end-fitting",
      name: "Automatic Transmission Oil Cooler End Fitting",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-end-fitting-retainer",
      name: "Automatic Transmission Oil Cooler End Fitting Retainer",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-hose",
      name: "Automatic Transmission Oil Cooler Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-hose-assembly",
      name: "Automatic Transmission Oil Cooler Hose Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-hose-clip",
      name: "Automatic Transmission Oil Cooler Hose Clip",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-hose-fitting-seal",
      name: "Automatic Transmission Oil Cooler Hose Fitting Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-hose-o-ring",
      name: "Automatic Transmission Oil Cooler Hose O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-line-connector",
      name: "Automatic Transmission Oil Cooler Line Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-mounting-kit",
      name: "Automatic Transmission Oil Cooler Mounting Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-o-ring",
      name: "Automatic Transmission Oil Cooler O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-seal",
      name: "Automatic Transmission Oil Cooler Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-thermostat",
      name: "Automatic Transmission Oil Cooler Thermostat",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-cooler-tube",
      name: "Automatic Transmission Oil Cooler Tube",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pressure-switch",
      name: "Automatic Transmission Oil Pressure Switch",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-assembly-bolt",
      name: "Automatic Transmission Oil Pump Assembly Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-body-bushing",
      name: "Automatic Transmission Oil Pump Body Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-bushing",
      name: "Automatic Transmission Oil Pump Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-cover-bolt",
      name: "Automatic Transmission Oil Pump Cover Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-gasket",
      name: "Automatic Transmission Oil Pump Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-o-ring",
      name: "Automatic Transmission Oil Pump O-Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-repair-sleeve",
      name: "Automatic Transmission Oil Pump Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-rotor-guide",
      name: "Automatic Transmission Oil Pump Rotor Guide",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-pump-seal",
      name: "Automatic Transmission Oil Pump Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-oil-temperature-indicator-switch-connector",
      name: "Automatic Transmission Oil Temperature Indicator Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-bearing",
      name: "Automatic Transmission Output Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-race",
      name: "Automatic Transmission Output Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-repair-sleeve",
      name: "Automatic Transmission Output Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-seal",
      name: "Automatic Transmission Output Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-seal-kit",
      name: "Automatic Transmission Output Shaft Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-speed-sensor",
      name: "Automatic Transmission Output Shaft Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-speed-sensor-o-ring",
      name: "Automatic Transmission Output Shaft Speed Sensor O-Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-output-shaft-thrust-washer",
      name: "Automatic Transmission Output Shaft Thrust Washer",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pilot-bearing-relay",
      name: "Automatic Transmission Pilot Bearing Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pinion-bearing",
      name: "Automatic Transmission Pinion Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pinion-race",
      name: "Automatic Transmission Pinion Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pinion-repair-sleeve",
      name: "Automatic Transmission Pinion Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pinion-seal",
      name: "Automatic Transmission Pinion Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-plug-adapter",
      name: "Automatic Transmission Plug Adapter",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pressure-control-solenoid",
      name: "Automatic Transmission Pressure Control Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pressure-control-solenoid-connector",
      name: "Automatic Transmission Pressure Control Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pressure-sensor-transducer",
      name: "Automatic Transmission Pressure Sensor Transducer",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pressure-switch-manifold",
      name: "Automatic Transmission Pressure Switch Manifold",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-pump-repair-sleeve",
      name: "Automatic Transmission Pump Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-reaction-internal-gear",
      name: "Automatic Transmission Reaction Internal Gear",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-repair-sleeve",
      name: "Automatic Transmission Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-ring-gear",
      name: "Automatic Transmission Ring Gear",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-seal",
      name: "Automatic Transmission Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-seal-kit",
      name: "Automatic Transmission Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-seals-and-o-rings-kit",
      name: "Automatic Transmission Seals and O-Rings Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-secondary-gear-bearing",
      name: "Automatic Transmission Secondary Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-selector-shaft-seal",
      name: "Automatic Transmission Selector Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-servo-cover-bolt",
      name: "Automatic Transmission Servo Cover Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-servo-cover-seal",
      name: "Automatic Transmission Servo Cover Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-cable-bushing",
      name: "Automatic Transmission Shift Cable Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-detent-ball",
      name: "Automatic Transmission Shift Detent Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-indicator-cable-bracket",
      name: "Automatic Transmission Shift Indicator Cable Bracket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-indicator-connector",
      name: "Automatic Transmission Shift Indicator Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-lever-bushing",
      name: "Automatic Transmission Shift Lever Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-lever-control-rod-bushing",
      name: "Automatic Transmission Shift Lever Control Rod Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-linkage-bushing",
      name: "Automatic Transmission Shift Linkage Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-linkage-clip",
      name: "Automatic Transmission Shift Linkage Clip",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-lock-control-solenoid-connector",
      name: "Automatic Transmission Shift Lock Control Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-lock-control-solenoid-relay-connector",
      name: "Automatic Transmission Shift Lock Control Solenoid Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-lock-relay",
      name: "Automatic Transmission Shift Lock Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-mode-switch",
      name: "Automatic Transmission Shift Mode Switch",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-program-switch-light-bulb",
      name: "Automatic Transmission Shift Program Switch Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-repair-kit",
      name: "Automatic Transmission Shift Repair Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-shaft-seal",
      name: "Automatic Transmission Shift Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-solenoid",
      name: "Automatic Transmission Shift Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-solenoid-valve-connector",
      name: "Automatic Transmission Shift Solenoid Valve Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-tube",
      name: "Automatic Transmission Shift Tube",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-tube-bushing",
      name: "Automatic Transmission Shift Tube Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-tube-clamp",
      name: "Automatic Transmission Shift Tube Clamp",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shift-tube-lever-pin",
      name: "Automatic Transmission Shift Tube Lever Pin",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shifter-cable",
      name: "Automatic Transmission Shifter Cable",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shifter-cable-kit",
      name: "Automatic Transmission Shifter Cable Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-shifter-repair-kit",
      name: "Automatic Transmission Shifter Repair Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-side-cover-gasket",
      name: "Automatic Transmission Side Cover Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-spark-control-relay",
      name: "Automatic Transmission Spark Control Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-spark-control-relay-connector",
      name: "Automatic Transmission Spark Control Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-spark-control-switch",
      name: "Automatic Transmission Spark Control Switch",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-speed-sensor",
      name: "Automatic Transmission Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-speed-sensor-connector",
      name: "Automatic Transmission Speed Sensor Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-speedometer-pinion-seal",
      name: "Automatic Transmission Speedometer Pinion Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter",
      name: "Automatic Transmission Torque Converter",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-bushing",
      name: "Automatic Transmission Torque Converter Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-blow-off-ball",
      name: "Automatic Transmission Torque Converter Clutch Blow Off Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-pressure-switch-connector",
      name: "Automatic Transmission Torque Converter Clutch Pressure Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-pulse-width-modulation-solenoid",
      name: "Automatic Transmission Torque Converter Clutch Pulse Width Modulation Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-relay",
      name: "Automatic Transmission Torque Converter Clutch Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-relay-connector",
      name: "Automatic Transmission Torque Converter Clutch Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-solenoid",
      name: "Automatic Transmission Torque Converter Clutch Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-solenoid-connector",
      name: "Automatic Transmission Torque Converter Clutch Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-switch-connector",
      name: "Automatic Transmission Torque Converter Clutch Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-temperature-switch-connector",
      name: "Automatic Transmission Torque Converter Clutch Temperature Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-clutch-valve-solenoid-connector",
      name: "Automatic Transmission Torque Converter Clutch Valve Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-connector",
      name: "Automatic Transmission Torque Converter Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-housing-plug",
      name: "Automatic Transmission Torque Converter Housing Plug",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-pulse-width-modulation-solenoid-connector",
      name: "Automatic Transmission Torque Converter Pulse Width Modulation Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-repair-sleeve",
      name: "Automatic Transmission Torque Converter Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-seal",
      name: "Automatic Transmission Torque Converter Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-seal-retaining-ring",
      name: "Automatic Transmission Torque Converter Seal Retaining Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-solenoid-connector",
      name: "Automatic Transmission Torque Converter Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-torque-converter-stator-thrust-bearing",
      name: "Automatic Transmission Torque Converter Stator Thrust Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-tow-haul-switch-connector",
      name: "Automatic Transmission Tow / Haul Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-transfer-gear-bearing",
      name: "Automatic Transmission Transfer Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-transfer-idler-bearing",
      name: "Automatic Transmission Transfer Idler Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-transfer-shaft-bearing",
      name: "Automatic Transmission Transfer Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-transfer-shaft-race",
      name: "Automatic Transmission Transfer Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-transfer-shaft-seal",
      name: "Automatic Transmission Transfer Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-turbine-shaft-fluid-seal-ring",
      name: "Automatic Transmission Turbine Shaft Fluid Seal Ring",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-turbine-shaft-seal",
      name: "Automatic Transmission Turbine Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-vacuum-modulator",
      name: "Automatic Transmission Vacuum Modulator",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body",
      name: "Automatic Transmission Valve Body",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-check-ball",
      name: "Automatic Transmission Valve Body Check Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-cover",
      name: "Automatic Transmission Valve Body Cover",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-cover-gasket",
      name: "Automatic Transmission Valve Body Cover Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-gasket",
      name: "Automatic Transmission Valve Body Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-sealing-sleeve",
      name: "Automatic Transmission Valve Body Sealing Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-valve-body-separator-plate",
      name: "Automatic Transmission Valve Body Separator Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-wiring-harness-clip",
      name: "Automatic Transmission Wiring Harness Clip",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "automatic-transmission-wiring-harness-connector",
      name: "Automatic Transmission Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-ac-evaporator-inlet-hose",
      name: "Auxiliary A/C Evaporator Inlet Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-ac-evaporator-outlet-hose-seal",
      name: "Auxiliary A/C Evaporator Outlet Hose Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-air-regulator",
      name: "Auxiliary Air Regulator",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-battery-relay",
      name: "Auxiliary Battery Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-battery-relay-connector",
      name: "Auxiliary Battery Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-coolant-pump-and-motor-connector",
      name: "Auxiliary Coolant Pump and Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-cooler-connector",
      name: "Auxiliary Cooler Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-engine-cooling-fan-relay",
      name: "Auxiliary Engine Cooling Fan Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-engine-cooling-fan-relay-connector",
      name: "Auxiliary Engine Cooling Fan Relay Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-heater-relay",
      name: "Auxiliary Heater Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-heater-switch-connector",
      name: "Auxiliary Heater Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "auxiliary-light-connector",
      name: "Auxiliary Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "awd-control-relay",
      name: "AWD Control Relay",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "awd-control-relay-connector",
      name: "AWD Control Relay Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-bearing-and-hub-assembly",
      name: "Axle Bearing and Hub Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-bearing-and-hub-assembly-repair-kit",
      name: "Axle Bearing and Hub Assembly Repair Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-bumper",
      name: "Axle Bumper",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-bearing",
      name: "Axle Differential Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-bearing-and-seal-kit",
      name: "Axle Differential Bearing and Seal Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-bearing-kit",
      name: "Axle Differential Bearing Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-bearing-race",
      name: "Axle Differential Bearing Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-repair-sleeve",
      name: "Axle Differential Repair Sleeve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-differential-seal",
      name: "Axle Differential Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-housing-cover-gasket",
      name: "Axle Housing Cover Gasket",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-hub-assembly",
      name: "Axle Hub Assembly",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "axle-intermediate-shaft-bearing",
      name: "Axle Intermediate Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-intermediate-shaft-seal",
      name: "Axle Intermediate Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-output-shaft-bearing",
      name: "Axle Output Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-output-shaft-seal",
      name: "Axle Output Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-pinion-race",
      name: "Axle Pinion Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-pinion-repair-sleeve",
      name: "Axle Pinion Repair Sleeve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-pivot-bushing",
      name: "Axle Pivot Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "axle-service-reservoir-drain-cock-cable",
      name: "Axle Service Reservoir Drain Cock Cable",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-shift-control-switch-connector",
      name: "Axle Shift Control Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-spindle-bearing",
      name: "Axle Spindle Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-spindle-seal",
      name: "Axle Spindle Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "axle-support-bushing",
      name: "Axle Support Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "axle-vent",
      name: "Axle Vent",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "back-glass-lift-support",
      name: "Back Glass Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-alarm",
      name: "Back Up Alarm",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-alarm-connector",
      name: "Back Up Alarm Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-bulb",
      name: "Back Up Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-connector",
      name: "Back Up Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-relay",
      name: "Back Up Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-relay-connector",
      name: "Back Up Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-socket",
      name: "Back Up Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-switch",
      name: "Back Up Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-switch-connector",
      name: "Back Up Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-wiring-harness",
      name: "Back Up Light Wiring Harness",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "back-up-light-wiring-harness-connector",
      name: "Back Up Light Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ball-joint-press",
      name: "Ball Joint Press",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "ball-joint-press-adapter",
      name: "Ball Joint Press Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "ballast-resistor",
      name: "Ballast Resistor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "barometric-pressure-sensor",
      name: "Barometric Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "barometric-pressure-sensor-connector",
      name: "Barometric Pressure Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable",
      name: "Battery Cable",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-bolt",
      name: "Battery Cable Bolt",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-clamp",
      name: "Battery Cable Clamp",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-connector",
      name: "Battery Cable Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-harness",
      name: "Battery Cable Harness",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-junction-block-connector",
      name: "Battery Cable Junction Block Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-spacer",
      name: "Battery Cable Spacer",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-terminal-end",
      name: "Battery Cable Terminal End",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-cable-terminal-end-nut",
      name: "Battery Cable Terminal End Nut",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-charge-motor-connector",
      name: "Battery Charge Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "battery-charge-relay",
      name: "Battery Charge Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-current-sensor",
      name: "Battery Current Sensor",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-current-sensor-connector",
      name: "Battery Current Sensor Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-fuse",
      name: "Battery Fuse",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "battery-hold-down",
      name: "Battery Hold Down",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-hold-down-clamp",
      name: "Battery Hold Down Clamp",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-isolation-connector",
      name: "Battery Isolation Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-isolation-relay",
      name: "Battery Isolation Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-jumper-cable",
      name: "Battery Jumper Cable",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-nut",
      name: "Battery Nut",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-overload-relay",
      name: "Battery Overload Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-relay-connector",
      name: "Battery Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-saver-relay",
      name: "Battery Saver Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-switch-connector",
      name: "Battery Switch Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-temperature-sensor",
      name: "Battery Temperature Sensor",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-temperature-sensor-connector",
      name: "Battery Temperature Sensor Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-terminal",
      name: "Battery Terminal",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-terminal-bolt",
      name: "Battery Terminal Bolt",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-tray",
      name: "Battery Tray",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "battery-vent-tube",
      name: "Battery Vent Tube",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "beam-axle-pivot-bushing",
      name: "Beam Axle Pivot Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "belt-installation-tool",
      name: "Belt Installation Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "belt-tensioner-assembly-o-ring",
      name: "Belt Tensioner Assembly O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "blockout-solenoid-connector",
      name: "Blockout Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "blower-motor-pigtail",
      name: "Blower Motor Pigtail",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "blower-motor-wiring-harness",
      name: "Blower Motor Wiring Harness",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "body-builder-connector",
      name: "Body Builder Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-control-module",
      name: "Body Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-control-module-connector",
      name: "Body Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-electrical-ground-strap",
      name: "Body Electrical Ground Strap",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-electrical-ground-strap-bolt",
      name: "Body Electrical Ground Strap Bolt",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-mount",
      name: "Body Mount",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-mount-set",
      name: "Body Mount Set",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-wiring-harness-connector",
      name: "Body Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-wiring-harness-relay",
      name: "Body Wiring Harness Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-wiring-harness-relay-connector",
      name: "Body Wiring Harness Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "body-wiring-harness-strap",
      name: "Body Wiring Harness Strap",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-parking-light-connector",
      name: "Brake / Parking Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-tail-turn-signal-light-connector",
      name: "Brake / Tail / Turn Signal Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-tail-light-connector",
      name: "Brake / Tail Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-backing-plate",
      name: "Brake Backing Plate",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-bleeder-screw",
      name: "Brake Bleeder Screw",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-deactivation-switch-connector",
      name: "Brake Deactivation Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-drum",
      name: "Brake Drum",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-dust-shield",
      name: "Brake Dust Shield",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-fluid-flow-switch",
      name: "Brake Fluid Flow Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-fluid-level-sensor",
      name: "Brake Fluid Level Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-fluid-level-sensor-connector",
      name: "Brake Fluid Level Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-fluid-level-switch-connector",
      name: "Brake Fluid Level Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-fluid-pressure-sensor-connector",
      name: "Brake Fluid Pressure Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-hose",
      name: "Brake Hydraulic Hose",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-hose-caliper-bolt-washer",
      name: "Brake Hydraulic Hose Caliper Bolt Washer",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-hose-lock-clip",
      name: "Brake Hydraulic Hose Lock Clip",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-hose-sealing-washer",
      name: "Brake Hydraulic Hose Sealing Washer",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-hose-to-caliper-bolt",
      name: "Brake Hydraulic Hose to Caliper Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-hydraulic-line",
      name: "Brake Hydraulic Line",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light",
      name: "Brake Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-bulb",
      name: "Brake Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-connector",
      name: "Brake Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-fail-switch",
      name: "Brake Light Fail Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-relay",
      name: "Brake Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-relay-connector",
      name: "Brake Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-socket",
      name: "Brake Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-switch",
      name: "Brake Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-switch-connector",
      name: "Brake Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-light-switch-retainer",
      name: "Brake Light Switch Retainer",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-master-cylinder",
      name: "Brake Master Cylinder",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-master-cylinder-reservoir",
      name: "Brake Master Cylinder Reservoir",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-master-cylinder-reservoir-cap",
      name: "Brake Master Cylinder Reservoir Cap",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-master-cylinder-reservoir-cap-gasket",
      name: "Brake Master Cylinder Reservoir Cap Gasket",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-park-shift-interlock-solenoid-connector",
      name: "Brake Park Shift Interlock Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-bushing",
      name: "Brake Pedal Bushing",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-pad",
      name: "Brake Pedal Pad",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-position-sensor",
      name: "Brake Pedal Position Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-position-sensor-connector",
      name: "Brake Pedal Position Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-stop-pad",
      name: "Brake Pedal Stop Pad",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pedal-travel-sensor",
      name: "Brake Pedal Travel Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-modulator-motor-connector",
      name: "Brake Pressure Modulator Motor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-modulator-pump-motor-connector",
      name: "Brake Pressure Modulator Pump Motor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-modulator-sensor-connector",
      name: "Brake Pressure Modulator Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-modulator-valve-solenoid-connector",
      name: "Brake Pressure Modulator Valve Solenoid Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-relay",
      name: "Brake Pressure Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-sensor-connector",
      name: "Brake Pressure Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-switch-connector",
      name: "Brake Pressure Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-pressure-warning-switch",
      name: "Brake Pressure Warning Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "brake-proportioning-valve",
      name: "Brake Proportioning Valve",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "bumper-cover-retainer",
      name: "Bumper Cover Retainer",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "bumper-end-cap",
      name: "Bumper End Cap",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-filter",
      name: "Cabin Air Filter",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-filter-cover",
      name: "Cabin Air Filter Cover",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-filter-retrofit-kit",
      name: "Cabin Air Filter Retrofit Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-filter-set",
      name: "Cabin Air Filter Set",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-temperature-sensor",
      name: "Cabin Air Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-temperature-sensor-aspirator",
      name: "Cabin Air Temperature Sensor Aspirator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cabin-air-temperature-sensor-connector",
      name: "Cabin Air Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "cable-make-up-kit",
      name: "Cable Make Up Kit",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "cable-tie",
      name: "Cable Tie",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "camshaft-position-solenoid-connector",
      name: "Camshaft Position Solenoid Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "camshaft-synchronizer-alignment-tool-kit",
      name: "Camshaft Synchronizer Alignment Tool Kit",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "canister-vent-solenoid-connector",
      name: "Canister Vent Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "capless-fuel-funnel",
      name: "Capless Fuel Funnel",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-accelerator-cable",
      name: "Carburetor Accelerator Cable",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-accelerator-cable-bracket-stud",
      name: "Carburetor Accelerator Cable Bracket Stud",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-accelerator-cable-clip-bolt",
      name: "Carburetor Accelerator Cable Clip Bolt",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-choke-heater-switch-connector",
      name: "Carburetor Choke Heater Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-choke-pull-off",
      name: "Carburetor Choke Pull-Off",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-choke-thermostat",
      name: "Carburetor Choke Thermostat",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-choke-thermostat-connector",
      name: "Carburetor Choke Thermostat Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-float",
      name: "Carburetor Float",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-heat-shield-gasket",
      name: "Carburetor Heat Shield Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-mounting-gasket",
      name: "Carburetor Mounting Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-power-valve",
      name: "Carburetor Power Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-repair-kit",
      name: "Carburetor Repair Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "carburetor-secondary-throttle-diaphragm",
      name: "Carburetor Secondary Throttle Diaphragm",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-area-light-connector",
      name: "Cargo Area Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-area-light-socket",
      name: "Cargo Area Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-box-light-bulb",
      name: "Cargo Box Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-door-lock-switch-connector",
      name: "Cargo Door Lock Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-light-relay",
      name: "Cargo Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-light-relay-connector",
      name: "Cargo Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cargo-net",
      name: "Cargo Net",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "catalyst-monitor-sensor-connector",
      name: "Catalyst Monitor Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "catalytic-converter-heat-shield-bolt-set",
      name: "Catalytic Converter Heat Shield Bolt Set",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "catalytic-converter-heat-shield-retainer",
      name: "Catalytic Converter Heat Shield Retainer",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "catalytic-converter-temperature-sensor-connector",
      name: "Catalytic Converter Temperature Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "cd-player-connector",
      name: "CD Player Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "center-console",
      name: "Center Console",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-console-latch",
      name: "Center Console Latch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light",
      name: "Center High Mount Stop Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-bulb",
      name: "Center High Mount Stop Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-connector",
      name: "Center High Mount Stop Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-lens",
      name: "Center High Mount Stop Light Lens",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-relay",
      name: "Center High Mount Stop Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-relay-connector",
      name: "Center High Mount Stop Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "center-high-mount-stop-light-socket",
      name: "Center High Mount Stop Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "charge-light-relay",
      name: "Charge Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "charge-light-relay-connector",
      name: "Charge Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "chassis-alignment-tool",
      name: "Chassis Alignment Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "chassis-wiring-harness-connector",
      name: "Chassis Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "check-engine-light",
      name: "Check Engine Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "check-engine-light-bulb",
      name: "Check Engine Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "check-engine-light-relay",
      name: "Check Engine Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter",
      name: "Cigarette Lighter",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter-kit",
      name: "Cigarette Lighter Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter-light-bulb",
      name: "Cigarette Lighter Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter-relay",
      name: "Cigarette Lighter Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter-relay-connector",
      name: "Cigarette Lighter Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cigarette-lighter-socket-connector",
      name: "Cigarette Lighter Socket Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "circuit-breaker",
      name: "Circuit Breaker",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "circuit-breaker-connector",
      name: "Circuit Breaker Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "circuit-opening-relay-connector",
      name: "Circuit Opening Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clearance-light-bulb",
      name: "Clearance Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clearance-light-connector",
      name: "Clearance Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "climate-control-seat-module-connector",
      name: "Climate Control Seat Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clock-connector",
      name: "Clock Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clock-light",
      name: "Clock Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clock-light-bulb",
      name: "Clock Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clock-light-socket",
      name: "Clock Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-alignment-tool",
      name: "Clutch Alignment Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-cable",
      name: "Clutch Cable",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-countershaft-bearing",
      name: "Clutch Countershaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-flywheel",
      name: "Clutch Flywheel",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-flywheel-bolt",
      name: "Clutch Flywheel Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-flywheel-ring-gear",
      name: "Clutch Flywheel Ring Gear",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-fork",
      name: "Clutch Fork",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-hydraulic-hose",
      name: "Clutch Hydraulic Hose",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-hydraulic-line",
      name: "Clutch Hydraulic Line",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-interlock-relay",
      name: "Clutch Interlock Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-master-cylinder",
      name: "Clutch Master Cylinder",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-bolt",
      name: "Clutch Pedal Bolt",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-bushing",
      name: "Clutch Pedal Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-pad",
      name: "Clutch Pedal Pad",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-position-relay",
      name: "Clutch Pedal Position Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-position-switch",
      name: "Clutch Pedal Position Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pedal-position-switch-connector",
      name: "Clutch Pedal Position Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pilot-bearing",
      name: "Clutch Pilot Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pilot-bushing",
      name: "Clutch Pilot Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-pivot-ball",
      name: "Clutch Pivot Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-push-rod-bushing",
      name: "Clutch Push Rod Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-relay-connector",
      name: "Clutch Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-release-bearing",
      name: "Clutch Release Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-sensor",
      name: "Clutch Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-slave-cylinder",
      name: "Clutch Slave Cylinder",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "clutch-starter-safety-switch",
      name: "Clutch Starter Safety Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "coil-spring-insulator",
      name: "Coil Spring Insulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "coil-spring-set",
      name: "Coil Spring Set",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "cold-start-valve-temperature-switch-connector",
      name: "Cold Start Valve Temperature Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "collision-alarm-connector",
      name: "Collision Alarm Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "combination-light-socket",
      name: "Combination Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "combination-switch",
      name: "Combination Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "combination-switch-connector",
      name: "Combination Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "compass-sensor-connector",
      name: "Compass Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "computer-control-relay",
      name: "Computer Control Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "computer-control-relay-connector",
      name: "Computer Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "concealed-headlight-relay",
      name: "Concealed Headlight Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "concealed-headlight-relay-connector",
      name: "Concealed Headlight Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "console-harness-connector",
      name: "Console Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "console-lid",
      name: "Console Lid",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-control-unit-connector",
      name: "Convertible Top Control Unit Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-hydraulic-pump-connector",
      name: "Convertible Top Hydraulic Pump Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-hydraulic-pump-mount",
      name: "Convertible Top Hydraulic Pump Mount",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-hydraulic-pump-relay",
      name: "Convertible Top Hydraulic Pump Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-latch-actuator-relay",
      name: "Convertible Top Latch Actuator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-latch-micro-switch",
      name: "Convertible Top Latch Micro Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-motor-connector",
      name: "Convertible Top Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-relay",
      name: "Convertible Top Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-relay-connector",
      name: "Convertible Top Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-release-actuator-connector",
      name: "Convertible Top Release Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-switch-connector",
      name: "Convertible Top Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "convertible-top-wiring-harness-connector",
      name: "Convertible Top Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "coolant-heat-storage-tank-pump",
      name: "Coolant Heat Storage Tank Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "cooling-system-adapter",
      name: "Cooling System Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-side-marker-light-assembly",
      name: "Cornering / Side Marker Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-turn-signal-light-connector",
      name: "Cornering / Turn Signal Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light",
      name: "Cornering Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-assembly",
      name: "Cornering Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-bulb",
      name: "Cornering Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-connector",
      name: "Cornering Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-relay",
      name: "Cornering Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-socket",
      name: "Cornering Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cornering-light-socket-connector",
      name: "Cornering Light Socket Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-bulb",
      name: "Courtesy Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-connector",
      name: "Courtesy Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-relay",
      name: "Courtesy Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-relay-connector",
      name: "Courtesy Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-socket",
      name: "Courtesy Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-switch",
      name: "Courtesy Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "courtesy-light-switch-connector",
      name: "Courtesy Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cowl-cover",
      name: "Cowl Cover",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "cowl-water-deflector",
      name: "Cowl Water Deflector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "crankshaft-angle-sensor-blade",
      name: "Crankshaft Angle Sensor Blade",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "cross-body-wiring-harness-connector",
      name: "Cross Body Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-check-valve",
      name: "Cruise Control Check Valve",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-cut-out-switch",
      name: "Cruise Control Cut-Out Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-indicator-light-bulb",
      name: "Cruise Control Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-indicator-light-connector",
      name: "Cruise Control Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-module-cable-retainer",
      name: "Cruise Control Module Cable Retainer",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-module-connector",
      name: "Cruise Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-relay",
      name: "Cruise Control Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-relay-connector",
      name: "Cruise Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-release-switch",
      name: "Cruise Control Release Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-release-switch-connector",
      name: "Cruise Control Release Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-servo-connector",
      name: "Cruise Control Servo Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-switch",
      name: "Cruise Control Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-switch-connector",
      name: "Cruise Control Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cruise-control-valve",
      name: "Cruise Control Valve",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "cup",
      name: "Cup",
      categories: [
        {
          category_id: "household-shop-and-office-products",
          category_name: "Household, Shop and Office Products",
          position: 0,
        },
      ],
    },
    {
      id: "cup-holder",
      name: "Cup Holder",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "cv-axle-assembly",
      name: "CV Axle Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "cv-axle-shaft",
      name: "CV Axle Shaft",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "cv-axle-shaft-seal",
      name: "CV Axle Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "cv-intermediate-shaft",
      name: "CV Intermediate Shaft",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "cv-joint-boot",
      name: "CV Joint Boot",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "cv-joint-boot-kit",
      name: "CV Joint Boot Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "damper-shock-absorber-actuator-and-solenoid-connector",
      name: "Damper / Shock Absorber Actuator and Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dash-harness-connector",
      name: "Dash Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dashboard-air-vent",
      name: "Dashboard Air Vent",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light",
      name: "Daytime Running Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-bulb",
      name: "Daytime Running Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-connector",
      name: "Daytime Running Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-module-connector",
      name: "Daytime Running Light Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-relay",
      name: "Daytime Running Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-relay-connector",
      name: "Daytime Running Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-resistor-connector",
      name: "Daytime Running Light Resistor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "daytime-running-light-socket",
      name: "Daytime Running Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "deck-lid-hatch-release-switch-connector",
      name: "Deck Lid / Hatch Release Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "deck-lid-liftgate-ajar-switch",
      name: "Deck Lid / Liftgate Ajar Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "deck-lid-liftgate-ajar-switch-connector",
      name: "Deck Lid / Liftgate Ajar Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "deck-lid-liftgate-anti-theft-switch-connector",
      name: "Deck Lid / Liftgate Anti-Theft Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "delta-pressure-feedback-exhaust-gas-recirculation-egr-sensor-connector",
      name: "Delta Pressure Feedback Exhaust Gas Recirculation (EGR) Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diagnostic-test-connector",
      name: "Diagnostic Test Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-filler-cap",
      name: "Diesel Exhaust Fluid (DEF) Filler Cap",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-heater-relay",
      name: "Diesel Exhaust Fluid (DEF) Heater Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-injection-nozzle-connector",
      name: "Diesel Exhaust Fluid (DEF) Injection Nozzle Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-injector-connector",
      name: "Diesel Exhaust Fluid (DEF) Injector Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-module",
      name: "Diesel Exhaust Fluid (DEF) Module",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-exhaust-fluid-def-pump-connector",
      name: "Diesel Exhaust Fluid (DEF) Pump Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-filter-bleeder-screw",
      name: "Diesel Fuel Filter Bleeder Screw",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-driver-module",
      name: "Diesel Fuel Injector Driver Module",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-driver-module-resistor",
      name: "Diesel Fuel Injector Driver Module Resistor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-installation-kit",
      name: "Diesel Fuel Injector Installation Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-pump",
      name: "Diesel Fuel Injector Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-pump-connector",
      name: "Diesel Fuel Injector Pump Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-rail-connector",
      name: "Diesel Fuel Injector Rail Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-fuel-injector-rail-plug",
      name: "Diesel Fuel Injector Rail Plug",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug",
      name: "Diesel Glow Plug",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-connector",
      name: "Diesel Glow Plug Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-controller",
      name: "Diesel Glow Plug Controller",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-controller-connector",
      name: "Diesel Glow Plug Controller Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-indicator-relay",
      name: "Diesel Glow Plug Indicator Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-relay",
      name: "Diesel Glow Plug Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-relay-connector",
      name: "Diesel Glow Plug Relay Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-switch",
      name: "Diesel Glow Plug Switch",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-glow-plug-wiring-harness",
      name: "Diesel Glow Plug Wiring Harness",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-high-pressure-oil-pump",
      name: "Diesel High Pressure Oil Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-high-pressure-oil-pump-fitting-kit",
      name: "Diesel High Pressure Oil Pump Fitting Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-high-pressure-oil-pump-seal-kit",
      name: "Diesel High Pressure Oil Pump Seal Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-injection-control-pressure-harness",
      name: "Diesel Injection Control Pressure Harness",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-injection-control-pressure-sensor",
      name: "Diesel Injection Control Pressure Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-light-relay",
      name: "Diesel Light Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-light-relay-connector",
      name: "Diesel Light Relay Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-particulate-filter-dpf-pressure-sensor",
      name: "Diesel Particulate Filter (DPF) Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-particulate-filter-dpf-pressure-sensor-connector",
      name: "Diesel Particulate Filter (DPF) Pressure Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-particulate-filter-dpf-relay",
      name: "Diesel Particulate Filter (DPF) Relay",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-particulate-light-connector",
      name: "Diesel Particulate Light Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-particulate-sensor",
      name: "Diesel Particulate Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diesel-wait-indicator-light-bulb",
      name: "Diesel Wait Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "differential-bearing",
      name: "Differential Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-bearing-set",
      name: "Differential Bearing Set",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-carrier-bearing-race",
      name: "Differential Carrier Bearing Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-carrier-bushing",
      name: "Differential Carrier Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "differential-carrier-gasket",
      name: "Differential Carrier Gasket",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-cover",
      name: "Differential Cover",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-cover-gasket",
      name: "Differential Cover Gasket",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-cover-plug",
      name: "Differential Cover Plug",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-crush-sleeve",
      name: "Differential Crush Sleeve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-dynamic-dampener",
      name: "Differential Dynamic Dampener",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-lock-control-vacuum-pump-mount",
      name: "Differential Lock Control Vacuum Pump Mount",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-lock-relay",
      name: "Differential Lock Relay",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-lock-sensor-connector",
      name: "Differential Lock Sensor Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-magnet",
      name: "Differential Magnet",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-mount",
      name: "Differential Mount",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-mount-bushing",
      name: "Differential Mount Bushing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-oil-cooler-end-fitting",
      name: "Differential Oil Cooler End Fitting",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-oil-filter",
      name: "Differential Oil Filter",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-oil-temperature-sensor-connector",
      name: "Differential Oil Temperature Sensor Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-angle-cam",
      name: "Differential Pinion Angle Cam",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-bearing",
      name: "Differential Pinion Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-bearing-set",
      name: "Differential Pinion Bearing Set",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-flange",
      name: "Differential Pinion Flange",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-pilot-bearing",
      name: "Differential Pinion Pilot Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-pilot-race",
      name: "Differential Pinion Pilot Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-race",
      name: "Differential Pinion Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-repair-sleeve",
      name: "Differential Pinion Repair Sleeve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-repair-sleeve-kit",
      name: "Differential Pinion Repair Sleeve Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-seal",
      name: "Differential Pinion Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-shaft-lock-bolt",
      name: "Differential Pinion Shaft Lock Bolt",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-pinion-shim",
      name: "Differential Pinion Shim",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-race",
      name: "Differential Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-ring-and-pinion",
      name: "Differential Ring and Pinion",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-seal",
      name: "Differential Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-shift-actuator-connector",
      name: "Differential Shift Actuator Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-shift-position-switch-connector",
      name: "Differential Shift Position Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-shifter-bearing",
      name: "Differential Shifter Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "differential-shifter-race",
      name: "Differential Shifter Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "dimmer-relay",
      name: "Dimmer Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dimmer-switch",
      name: "Dimmer Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dimmer-switch-connector",
      name: "Dimmer Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "direct-ignition-coil",
      name: "Direct Ignition Coil",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "direct-ignition-coil-boot",
      name: "Direct Ignition Coil Boot",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "direct-ignition-coil-boot-kit",
      name: "Direct Ignition Coil Boot Kit",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "direct-injection-high-pressure-fuel-pump",
      name: "Direct Injection High Pressure Fuel Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-anti-rattle-clip",
      name: "Disc Brake Anti-Rattle Clip",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper",
      name: "Disc Brake Caliper",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-bolt",
      name: "Disc Brake Caliper Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-bolt-kit",
      name: "Disc Brake Caliper Bolt Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-bracket",
      name: "Disc Brake Caliper Bracket",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-bracket-mounting-bolt",
      name: "Disc Brake Caliper Bracket Mounting Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-bushing",
      name: "Disc Brake Caliper Bushing",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-pin",
      name: "Disc Brake Caliper Pin",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-pin-bolt",
      name: "Disc Brake Caliper Pin Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-repair-kit",
      name: "Disc Brake Caliper Repair Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-caliper-seal-kit",
      name: "Disc Brake Caliper Seal Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-hardware-kit",
      name: "Disc Brake Hardware Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-hub",
      name: "Disc Brake Hub",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-low-frequency-noise-damper",
      name: "Disc Brake Low Frequency Noise Damper",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-pad",
      name: "Disc Brake Pad",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-pad-set",
      name: "Disc Brake Pad Set",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-pad-wear-sensor",
      name: "Disc Brake Pad Wear Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-pad-wear-sensor-connector",
      name: "Disc Brake Pad Wear Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-rotor",
      name: "Disc Brake Rotor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "disc-brake-rotor-and-hub-assembly",
      name: "Disc Brake Rotor and Hub Assembly",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "distributor",
      name: "Distributor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-armature",
      name: "Distributor Armature",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-cap",
      name: "Distributor Cap",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-cap-adapter",
      name: "Distributor Cap Adapter",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-cap-o-ring",
      name: "Distributor Cap O-Ring",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-cap-o-ring-assortment",
      name: "Distributor Cap O-Ring Assortment",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-check-valve",
      name: "Distributor Check Valve",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-connector",
      name: "Distributor Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-drive-gear",
      name: "Distributor Drive Gear",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-housing-seal",
      name: "Distributor Housing Seal",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-housing-seal-kit",
      name: "Distributor Housing Seal Kit",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-ignition-pickup",
      name: "Distributor Ignition Pickup",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-ignition-pickup-connector",
      name: "Distributor Ignition Pickup Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-mounting-gasket",
      name: "Distributor Mounting Gasket",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-o-ring",
      name: "Distributor O-Ring",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-primary-lead-wire",
      name: "Distributor Primary Lead Wire",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-rotor",
      name: "Distributor Rotor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "distributor-vacuum-advance",
      name: "Distributor Vacuum Advance",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "diverter-valve",
      name: "Diverter Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diverter-valve-connector",
      name: "Diverter Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "diverter-valve-harness-connector",
      name: "Diverter Valve Harness Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "dome-reading-light-connector",
      name: "Dome / Reading Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dome-light-bulb",
      name: "Dome Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dome-light-connector",
      name: "Dome Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dome-light-relay",
      name: "Dome Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dome-light-socket",
      name: "Dome Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dome-light-switch-connector",
      name: "Dome Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door",
      name: "Door",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-ajar-interior-light-switch-connector",
      name: "Door Ajar / Interior Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-ajar-chime-connector",
      name: "Door Ajar Chime Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-ajar-relay",
      name: "Door Ajar Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-ajar-relay-connector",
      name: "Door Ajar Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-ajar-switch-connector",
      name: "Door Ajar Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-check",
      name: "Door Check",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-check-bolt",
      name: "Door Check Bolt",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-check-strap",
      name: "Door Check Strap",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-courtesy-light-connector",
      name: "Door Courtesy Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-cylinder-anti-theft-disarm-switch-connector",
      name: "Door Cylinder Anti-Theft Disarm Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-glass-attaching-clips",
      name: "Door Glass Attaching Clips",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-harness-connector",
      name: "Door Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge",
      name: "Door Hinge",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge-bushing",
      name: "Door Hinge Bushing",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge-detent-roller",
      name: "Door Hinge Detent Roller",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge-pin",
      name: "Door Hinge Pin",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge-pin-and-bushing-kit",
      name: "Door Hinge Pin and Bushing Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-hinge-spring",
      name: "Door Hinge Spring",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-interior-reflector",
      name: "Door Interior Reflector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-jamb-switch",
      name: "Door Jamb Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-jamb-switch-connector",
      name: "Door Jamb Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-latch-cable",
      name: "Door Latch Cable",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-latch-cable-repair-kit",
      name: "Door Latch Cable Repair Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lift-support",
      name: "Door Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-actuator",
      name: "Door Lock Actuator",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-actuator-connector",
      name: "Door Lock Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-actuator-kit",
      name: "Door Lock Actuator Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-actuator-motor",
      name: "Door Lock Actuator Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-assembly",
      name: "Door Lock Assembly",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-kit",
      name: "Door Lock Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-knob",
      name: "Door Lock Knob",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-module-connector",
      name: "Door Lock Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-motor-connector",
      name: "Door Lock Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-relay",
      name: "Door Lock Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-relay-connector",
      name: "Door Lock Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-rod-clip",
      name: "Door Lock Rod Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-solenoid-connector",
      name: "Door Lock Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-striker",
      name: "Door Lock Striker",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-striker-anti-rattle-kit",
      name: "Door Lock Striker Anti-Rattle Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-switch",
      name: "Door Lock Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-lock-switch-connector",
      name: "Door Lock Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror",
      name: "Door Mirror",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-connector",
      name: "Door Mirror Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-control-connector",
      name: "Door Mirror Control Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-cover",
      name: "Door Mirror Cover",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-drive-motor",
      name: "Door Mirror Drive Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-drive-motor-connector",
      name: "Door Mirror Drive Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-glass",
      name: "Door Mirror Glass",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-illumination-light-bulb",
      name: "Door Mirror Illumination Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-relay",
      name: "Door Mirror Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-relay-connector",
      name: "Door Mirror Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-switch",
      name: "Door Mirror Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-mirror-turn-signal-light",
      name: "Door Mirror Turn Signal Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-module-connector",
      name: "Door Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-open-warning-relay",
      name: "Door Open Warning Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-open-warning-switch",
      name: "Door Open Warning Switch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-remote-mirror-switch",
      name: "Door Remote Mirror Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-seal",
      name: "Door Seal",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-sill-plate-connector",
      name: "Door Sill Plate Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-speaker-connector",
      name: "Door Speaker Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-lock-out-switch",
      name: "Door Window Lock-Out Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-lock-out-switch-connector",
      name: "Door Window Lock-Out Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-relay",
      name: "Door Window Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-switch",
      name: "Door Window Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-switch-bezel",
      name: "Door Window Switch Bezel",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-switch-connector",
      name: "Door Window Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-window-switch-illuminate-light-connector",
      name: "Door Window Switch Illuminate Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "door-wiring-harness",
      name: "Door Wiring Harness",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "double-cardan-cv-ball-kit",
      name: "Double Cardan CV Ball Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "double-cardan-cv-centering-yoke",
      name: "Double Cardan CV Centering Yoke",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "downshift-solenoid-connector",
      name: "Downshift Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-actuator-connector",
      name: "Drive Axle Actuator Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft",
      name: "Drive Axle Shaft",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-assembly",
      name: "Drive Axle Shaft Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-bearing",
      name: "Drive Axle Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-bearing-assembly",
      name: "Drive Axle Shaft Bearing Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-bearing-kit",
      name: "Drive Axle Shaft Bearing Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-bearing-set",
      name: "Drive Axle Shaft Bearing Set",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-damper",
      name: "Drive Axle Shaft Damper",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-flange-gasket",
      name: "Drive Axle Shaft Flange Gasket",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-lock-c-clip",
      name: "Drive Axle Shaft Lock C-Clip",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-pilot-bearing",
      name: "Drive Axle Shaft Pilot Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-race",
      name: "Drive Axle Shaft Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-repair-sleeve",
      name: "Drive Axle Shaft Repair Sleeve",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-seal",
      name: "Drive Axle Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-axle-shaft-seal-kit",
      name: "Drive Axle Shaft Seal Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-battery-pack-charging-port-connector",
      name: "Drive Motor Battery Pack Charging Port Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-battery-pack-coolant-temperature-sensor-connector",
      name: "Drive Motor Battery Pack Coolant Temperature Sensor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-battery-pack-cooling-fan-connector",
      name: "Drive Motor Battery Pack Cooling Fan Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-battery-service-plug",
      name: "Drive Motor Battery Service Plug",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-battery-voltage-sensor-connector",
      name: "Drive Motor Battery Voltage Sensor Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-coolant-pump",
      name: "Drive Motor Coolant Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-coolant-pump-connector",
      name: "Drive Motor Coolant Pump Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-harness-connector",
      name: "Drive Motor Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-inverter-connector",
      name: "Drive Motor Inverter Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-inverter-cooler",
      name: "Drive Motor Inverter Cooler",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-inverter-cooler-water-pump",
      name: "Drive Motor Inverter Cooler Water Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "drive-motor-stator-temperature-sensor-connector",
      name: "Drive Motor Stator Temperature Sensor Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-bearing",
      name: "Drive Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-bearing-support-assembly",
      name: "Drive Shaft Bearing Support Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-bolt",
      name: "Drive Shaft Bolt",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-center-bearing-rubber-cushion",
      name: "Drive Shaft Center Bearing Rubber Cushion",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-center-support",
      name: "Drive Shaft Center Support",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-center-support-bearing",
      name: "Drive Shaft Center Support Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-coupler",
      name: "Drive Shaft Coupler",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-cv-joint",
      name: "Drive Shaft CV Joint",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-flex-joint",
      name: "Drive Shaft Flex Joint",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-mount",
      name: "Drive Shaft Mount",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-mount-assembly",
      name: "Drive Shaft Mount Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-pinion-yoke",
      name: "Drive Shaft Pinion Yoke",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-repair-kit",
      name: "Drive Shaft Repair Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-seal",
      name: "Drive Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-seal-kit",
      name: "Drive Shaft Seal Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-slip-yoke",
      name: "Drive Shaft Slip Yoke",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-slip-yoke-bushing-kit",
      name: "Drive Shaft Slip Yoke Bushing Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "drive-shaft-slip-yoke-seal",
      name: "Drive Shaft Slip Yoke Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "driver-information-display-connector",
      name: "Driver Information Display Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "driver-information-display-switch",
      name: "Driver Information Display Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "driver-information-display-switch-connector",
      name: "Driver Information Display Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "driving-light-relay",
      name: "Driving Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "driving-light-relay-connector",
      name: "Driving Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "driving-mode-switch-connector",
      name: "Driving Mode Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-lever",
      name: "Drum Brake Adjusting Lever",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-lever-return-spring",
      name: "Drum Brake Adjusting Lever Return Spring",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-plug",
      name: "Drum Brake Adjusting Plug",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-screw-assembly",
      name: "Drum Brake Adjusting Screw Assembly",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-screw-spring",
      name: "Drum Brake Adjusting Screw Spring",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-adjusting-spring-kit",
      name: "Drum Brake Adjusting Spring Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-hardware-kit",
      name: "Drum Brake Hardware Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-hold-down-spring-cup",
      name: "Drum Brake Hold Down Spring Cup",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-inspection-plug",
      name: "Drum Brake Inspection Plug",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-self-adjuster-cable",
      name: "Drum Brake Self-Adjuster Cable",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-self-adjuster-cable-guide",
      name: "Drum Brake Self-Adjuster Cable Guide",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-self-adjuster-repair-kit",
      name: "Drum Brake Self-Adjuster Repair Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-shoe",
      name: "Drum Brake Shoe",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-shoe-hold-down-cup",
      name: "Drum Brake Shoe Hold Down Cup",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-shoe-return-spring-kit",
      name: "Drum Brake Shoe Return Spring Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-shoe-spring-hold-down-pin",
      name: "Drum Brake Shoe Spring Hold Down Pin",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-wheel-cylinder",
      name: "Drum Brake Wheel Cylinder",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "drum-brake-wheel-cylinder-kit",
      name: "Drum Brake Wheel Cylinder Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "dual-radiator-and-condenser-fan-assembly",
      name: "Dual Radiator and Condenser Fan Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "dvd-controller-module",
      name: "DVD Controller Module",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "dvd-player-relay",
      name: "DVD Player Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "dvd-player-remote-control",
      name: "DVD Player Remote Control",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "early-fuel-evaporation-efe-control-relay",
      name: "Early Fuel Evaporation (EFE) Control Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "early-fuel-evaporation-efe-control-relay-connector",
      name: "Early Fuel Evaporation (EFE) Control Relay Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "early-fuel-evaporation-efe-heater-relay",
      name: "Early Fuel Evaporation (EFE) Heater Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "electric-booster-heater-connector",
      name: "Electric Booster Heater Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "electric-brake-control-connector",
      name: "Electric Brake Control Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electric-fuel-pump",
      name: "Electric Fuel Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "electric-sliding-door-actuator-connector",
      name: "Electric Sliding Door Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "electrical-pigtail",
      name: "Electrical Pigtail",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-automatic-temperature-control-module-connector",
      name: "Electronic Automatic Temperature Control Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-automatic-temperature-control-sensor-connector",
      name: "Electronic Automatic Temperature Control Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-automatic-temperature-control-solenoid-connector",
      name: "Electronic Automatic Temperature Control Solenoid Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-and-traction-control-module",
      name: "Electronic Brake and Traction Control Module",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-control-connector",
      name: "Electronic Brake Control Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-control-indicator-light-relay",
      name: "Electronic Brake Control Indicator Light Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-control-module-bolt",
      name: "Electronic Brake Control Module Bolt",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-control-relay",
      name: "Electronic Brake Control Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-control-relay-connector",
      name: "Electronic Brake Control Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-harness-connector",
      name: "Electronic Brake Harness Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-module-connector",
      name: "Electronic Brake Module Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-brake-relay-connector",
      name: "Electronic Brake Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-engine-control-relay-connector",
      name: "Electronic Engine Control Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-load-detector",
      name: "Electronic Load Detector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-spark-control-module",
      name: "Electronic Spark Control Module",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-suspension-control-connector",
      name: "Electronic Suspension Control Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-throttle-body-actuator",
      name: "Electronic Throttle Body Actuator",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-throttle-body-actuator-connector",
      name: "Electronic Throttle Body Actuator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-throttle-harness-connector",
      name: "Electronic Throttle Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-traction-control-indicator-light-bulb",
      name: "Electronic Traction Control Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "electronic-vacuum-regulator-valve-wiring-connector",
      name: "Electronic Vacuum Regulator Valve Wiring Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "emblem-light-socket",
      name: "Emblem Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "emergency-vehicle-light-connector",
      name: "Emergency Vehicle Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "emergency-vehicle-light-relay",
      name: "Emergency Vehicle Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "emergency-vehicle-light-switch-connector",
      name: "Emergency Vehicle Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "emission-control-relay",
      name: "Emission Control Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "emission-control-relay-connector",
      name: "Emission Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-accessory-drive-seal",
      name: "Engine Accessory Drive Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-filter",
      name: "Engine Air Filter",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-coupling",
      name: "Engine Air Intake Coupling",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-heater",
      name: "Engine Air Intake Heater",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-heater-gasket",
      name: "Engine Air Intake Heater Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-heater-relay",
      name: "Engine Air Intake Heater Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-heater-relay-connector",
      name: "Engine Air Intake Heater Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-air-intake-hose",
      name: "Engine Air Intake Hose",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-auxiliary-shaft-repair-sleeve",
      name: "Engine Auxiliary Shaft Repair Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-auxiliary-shaft-seal",
      name: "Engine Auxiliary Shaft Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-auxiliary-water-pump",
      name: "Engine Auxiliary Water Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-auxiliary-water-pump-connector",
      name: "Engine Auxiliary Water Pump Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-auxiliary-water-pump-relay",
      name: "Engine Auxiliary Water Pump Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-balance-shaft-belt",
      name: "Engine Balance Shaft Belt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-balance-shaft-belt-tensioner",
      name: "Engine Balance Shaft Belt Tensioner",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-balance-shaft-chain-tensioner",
      name: "Engine Balance Shaft Chain Tensioner",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-balance-shaft-seal",
      name: "Engine Balance Shaft Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-balance-shaft-seal-kit",
      name: "Engine Balance Shaft Seal Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-brake-relay",
      name: "Engine Brake Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-brake-relay-connector",
      name: "Engine Brake Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft",
      name: "Engine Camshaft",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-bolt",
      name: "Engine Camshaft Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-cap",
      name: "Engine Camshaft Cap",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-cover-ground-cable-bolt",
      name: "Engine Camshaft Cover Ground Cable Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-oiler-control-valve",
      name: "Engine Camshaft Oiler Control Valve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-plug",
      name: "Engine Camshaft Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-plug-set",
      name: "Engine Camshaft Plug Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor",
      name: "Engine Camshaft Position Sensor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor-connector",
      name: "Engine Camshaft Position Sensor Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor-interrupter",
      name: "Engine Camshaft Position Sensor Interrupter",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor-magnet",
      name: "Engine Camshaft Position Sensor Magnet",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor-o-ring",
      name: "Engine Camshaft Position Sensor O-Ring",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-position-sensor-seal",
      name: "Engine Camshaft Position Sensor Seal",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-repair-sleeve",
      name: "Engine Camshaft Repair Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-seal",
      name: "Engine Camshaft Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-seal-kit",
      name: "Engine Camshaft Seal Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-synchronizer",
      name: "Engine Camshaft Synchronizer",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-synchronizer-connector",
      name: "Engine Camshaft Synchronizer Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-camshaft-thrust-bearing-bolt",
      name: "Engine Camshaft Thrust Bearing Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-circular-plug",
      name: "Engine Circular Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-compartment-light-bulb",
      name: "Engine Compartment Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-complete-overhaul-gasket-set",
      name: "Engine Complete Overhaul Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm",
      name: "Engine Control Module (ECM)",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-bolt",
      name: "Engine Control Module (ECM) Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-connector",
      name: "Engine Control Module (ECM) Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-harness-connector",
      name: "Engine Control Module (ECM) Harness Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-relay",
      name: "Engine Control Module (ECM) Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-wiring-harness",
      name: "Engine Control Module (ECM) Wiring Harness",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-wiring-harness-clip",
      name: "Engine Control Module (ECM) Wiring Harness Clip",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-wiring-harness-extension-connector",
      name: "Engine Control Module (ECM) Wiring Harness Extension Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-control-module-ecm-wiring-relay",
      name: "Engine Control Module (ECM) Wiring Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-conversion-gasket-set",
      name: "Engine Conversion Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-antifreeze",
      name: "Engine Coolant / Antifreeze",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-air-bleeder-valve",
      name: "Engine Coolant Air Bleeder Valve",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bleeder-screw",
      name: "Engine Coolant Bleeder Screw",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-hose",
      name: "Engine Coolant Bypass Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-line-seal-ring",
      name: "Engine Coolant Bypass Line Seal Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-pipe",
      name: "Engine Coolant Bypass Pipe",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-pipe-bolt",
      name: "Engine Coolant Bypass Pipe Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-pipe-connector",
      name: "Engine Coolant Bypass Pipe Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-bypass-pipe-o-ring",
      name: "Engine Coolant Bypass Pipe O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-crossover-pipe-gasket",
      name: "Engine Coolant Crossover Pipe Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-crossover-pipe-mounting-set",
      name: "Engine Coolant Crossover Pipe Mounting Set",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-filler-neck",
      name: "Engine Coolant Filler Neck",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-filter",
      name: "Engine Coolant Filter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-hose",
      name: "Engine Coolant Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-hose-connector-seal",
      name: "Engine Coolant Hose Connector Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-hose-flange-seal",
      name: "Engine Coolant Hose Flange Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-level-indicator-connector",
      name: "Engine Coolant Level Indicator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-level-relay",
      name: "Engine Coolant Level Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-level-relay-connector",
      name: "Engine Coolant Level Relay Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-level-sensor",
      name: "Engine Coolant Level Sensor",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-level-sensor-connector",
      name: "Engine Coolant Level Sensor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-manifold-gasket",
      name: "Engine Coolant Manifold Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-manifold-o-ring",
      name: "Engine Coolant Manifold O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-outlet-flange",
      name: "Engine Coolant Outlet Flange",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-outlet-gasket",
      name: "Engine Coolant Outlet Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-outlet-o-ring",
      name: "Engine Coolant Outlet O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-outlet-seal",
      name: "Engine Coolant Outlet Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe",
      name: "Engine Coolant Pipe",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe-adapter",
      name: "Engine Coolant Pipe Adapter",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe-gasket",
      name: "Engine Coolant Pipe Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe-o-ring",
      name: "Engine Coolant Pipe O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe-o-ring-kit",
      name: "Engine Coolant Pipe O-Ring Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-pipe-seal",
      name: "Engine Coolant Pipe Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-reservoir",
      name: "Engine Coolant Reservoir",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-reservoir-cap",
      name: "Engine Coolant Reservoir Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-reservoir-hose",
      name: "Engine Coolant Reservoir Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-reservoir-kit",
      name: "Engine Coolant Reservoir Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-reservoir-seal",
      name: "Engine Coolant Reservoir Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-sender",
      name: "Engine Coolant Temperature Sender",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-sending-unit-switch-connector",
      name: "Engine Coolant Temperature Sending Unit Switch Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-sensor",
      name: "Engine Coolant Temperature Sensor",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-sensor-clip",
      name: "Engine Coolant Temperature Sensor Clip",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-sensor-connector",
      name: "Engine Coolant Temperature Sensor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-switch",
      name: "Engine Coolant Temperature Switch",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-switch-connector",
      name: "Engine Coolant Temperature Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-temperature-switch-resistor",
      name: "Engine Coolant Temperature Switch Resistor",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat",
      name: "Engine Coolant Thermostat",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-water-inlet-assembly",
      name: "Engine Coolant Thermostat / Water Inlet Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-water-outlet-assembly",
      name: "Engine Coolant Thermostat / Water Outlet Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-case-gasket",
      name: "Engine Coolant Thermostat Case Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-case-seal",
      name: "Engine Coolant Thermostat Case Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-gasket",
      name: "Engine Coolant Thermostat Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing",
      name: "Engine Coolant Thermostat Housing",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-assembly",
      name: "Engine Coolant Thermostat Housing Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-bolt",
      name: "Engine Coolant Thermostat Housing Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-cap",
      name: "Engine Coolant Thermostat Housing Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-connector",
      name: "Engine Coolant Thermostat Housing Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-cover",
      name: "Engine Coolant Thermostat Housing Cover",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-cover-gasket",
      name: "Engine Coolant Thermostat Housing Cover Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-gasket",
      name: "Engine Coolant Thermostat Housing Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-o-ring",
      name: "Engine Coolant Thermostat Housing O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-plug",
      name: "Engine Coolant Thermostat Housing Plug",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-plug-seal",
      name: "Engine Coolant Thermostat Housing Plug Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-housing-seal",
      name: "Engine Coolant Thermostat Housing Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-kit",
      name: "Engine Coolant Thermostat Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-o-ring",
      name: "Engine Coolant Thermostat O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-thermostat-seal",
      name: "Engine Coolant Thermostat Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-valve-actuator-and-solenoid-connector",
      name: "Engine Coolant Valve Actuator and Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-bypass-gasket",
      name: "Engine Coolant Water Bypass Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-bypass-gasket-set",
      name: "Engine Coolant Water Bypass Gasket Set",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-inlet",
      name: "Engine Coolant Water Inlet",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-inlet-gasket",
      name: "Engine Coolant Water Inlet Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-inlet-seal",
      name: "Engine Coolant Water Inlet Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-outlet",
      name: "Engine Coolant Water Outlet",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-outlet-adapter-gasket",
      name: "Engine Coolant Water Outlet Adapter Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-outlet-cap",
      name: "Engine Coolant Water Outlet Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-outlet-housing-kit",
      name: "Engine Coolant Water Outlet Housing Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-coolant-water-outlet-tube",
      name: "Engine Coolant Water Outlet Tube",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan",
      name: "Engine Cooling Fan",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-assembly",
      name: "Engine Cooling Fan Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-blade",
      name: "Engine Cooling Fan Blade",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-clutch",
      name: "Engine Cooling Fan Clutch",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-clutch-switch-connector",
      name: "Engine Cooling Fan Clutch Switch Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-controller",
      name: "Engine Cooling Fan Controller",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-module",
      name: "Engine Cooling Fan Module",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-motor",
      name: "Engine Cooling Fan Motor",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-motor-connector",
      name: "Engine Cooling Fan Motor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-motor-kit",
      name: "Engine Cooling Fan Motor Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-motor-relay",
      name: "Engine Cooling Fan Motor Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-motor-relay-connector",
      name: "Engine Cooling Fan Motor Relay Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-pulley",
      name: "Engine Cooling Fan Pulley",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-pulley-bracket",
      name: "Engine Cooling Fan Pulley Bracket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-resistor",
      name: "Engine Cooling Fan Resistor",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-resistor-connector",
      name: "Engine Cooling Fan Resistor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-shroud-bolt",
      name: "Engine Cooling Fan Shroud Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-shut-off-delay-relay",
      name: "Engine Cooling Fan Shut-Off Delay Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-switch",
      name: "Engine Cooling Fan Switch",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-switch-connector",
      name: "Engine Cooling Fan Switch Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-fan-temperature-switch",
      name: "Engine Cooling Fan Temperature Switch",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cooling-system-pressure-tester-adapter",
      name: "Engine Cooling System Pressure Tester Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "engine-core-plug",
      name: "Engine Core Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-cap",
      name: "Engine Crankcase Breather Cap",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-element",
      name: "Engine Crankcase Breather Element",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-hose",
      name: "Engine Crankcase Breather Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-hose-check-valve",
      name: "Engine Crankcase Breather Hose Check Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-hose-connector",
      name: "Engine Crankcase Breather Hose Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-breather-hose-grommet",
      name: "Engine Crankcase Breather Hose Grommet",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-cover-gasket-set",
      name: "Engine Crankcase Cover Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-half-gasket",
      name: "Engine Crankcase Half Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-vent-connector",
      name: "Engine Crankcase Vent Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-vent-heater-connector",
      name: "Engine Crankcase Vent Heater Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-vent-kit",
      name: "Engine Crankcase Vent Kit",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-vent-valve",
      name: "Engine Crankcase Vent Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankcase-vent-valve-seal",
      name: "Engine Crankcase Vent Valve Seal",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft",
      name: "Engine Crankshaft",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-position-sensor",
      name: "Engine Crankshaft Position Sensor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-position-sensor-bolt",
      name: "Engine Crankshaft Position Sensor Bolt",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-position-sensor-connector",
      name: "Engine Crankshaft Position Sensor Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-position-sensor-seal",
      name: "Engine Crankshaft Position Sensor Seal",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-pulley",
      name: "Engine Crankshaft Pulley",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-repair-sleeve",
      name: "Engine Crankshaft Repair Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-seal",
      name: "Engine Crankshaft Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-seal-housing-bolt",
      name: "Engine Crankshaft Seal Housing Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-seal-kit",
      name: "Engine Crankshaft Seal Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-seal-retainer-gasket",
      name: "Engine Crankshaft Seal Retainer Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-crankshaft-sealing-flange-gasket",
      name: "Engine Crankshaft Sealing Flange Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-deactivation-solenoid",
      name: "Engine Cylinder Deactivation Solenoid",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-bolt-set",
      name: "Engine Cylinder Head Bolt Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-gasket",
      name: "Engine Cylinder Head Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-gasket-set",
      name: "Engine Cylinder Head Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-plug-seal",
      name: "Engine Cylinder Head Plug Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-set",
      name: "Engine Cylinder Head Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-spacer-shim",
      name: "Engine Cylinder Head Spacer Shim",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-temperature-sensor",
      name: "Engine Cylinder Head Temperature Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-cylinder-head-temperature-sensor-connector",
      name: "Engine Cylinder Head Temperature Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-extension-harness-connector",
      name: "Engine Extension Harness Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-fast-idle-relay",
      name: "Engine Fast Idle Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "engine-fast-idle-relay-connector",
      name: "Engine Fast Idle Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-gasket-set",
      name: "Engine Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-harmonic-balancer",
      name: "Engine Harmonic Balancer",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-harmonic-balancer-bolt",
      name: "Engine Harmonic Balancer Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-heater",
      name: "Engine Heater",
      categories: [
        {
          category_id: "accessories",
          category_name: "Accessories",
          position: 0,
        },
      ],
    },
    {
      id: "engine-heater-bolt",
      name: "Engine Heater Bolt",
      categories: [
        {
          category_id: "accessories",
          category_name: "Accessories",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold",
      name: "Engine Intake Manifold",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-bolt-set",
      name: "Engine Intake Manifold Bolt Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-gasket",
      name: "Engine Intake Manifold Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-gasket-set",
      name: "Engine Intake Manifold Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-heater-relay",
      name: "Engine Intake Manifold Heater Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-heater-relay-connector",
      name: "Engine Intake Manifold Heater Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-isolator-bolt",
      name: "Engine Intake Manifold Isolator Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-isolator-grommet-set",
      name: "Engine Intake Manifold Isolator Grommet Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-runner-control-sensor-connector",
      name: "Engine Intake Manifold Runner Control Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-runner-solenoid-connector",
      name: "Engine Intake Manifold Runner Solenoid Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-seal",
      name: "Engine Intake Manifold Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-temperature-sensor",
      name: "Engine Intake Manifold Temperature Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-temperature-sensor-connector",
      name: "Engine Intake Manifold Temperature Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-tuning-valve-relay-connector",
      name: "Engine Intake Manifold Tuning Valve Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-tuning-valve-solenoid-connector",
      name: "Engine Intake Manifold Tuning Valve Solenoid Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-vacuum-retainer-bushing",
      name: "Engine Intake Manifold Vacuum Retainer Bushing",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intake-manifold-valve-actuator-connector",
      name: "Engine Intake Manifold Valve Actuator Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intermediate-shaft-gear",
      name: "Engine Intermediate Shaft Gear",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intermediate-shaft-repair-sleeve",
      name: "Engine Intermediate Shaft Repair Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-intermediate-shaft-seal",
      name: "Engine Intermediate Shaft Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-lid-lift-support",
      name: "Engine Lid Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-lifter-valley-cover-gasket",
      name: "Engine Lifter Valley Cover Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-lifter-valley-cover-gasket-set",
      name: "Engine Lifter Valley Cover Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-main-bearing-gasket-set",
      name: "Engine Main Bearing Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-management-relay",
      name: "Engine Management Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-management-relay-connector",
      name: "Engine Management Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-metal-temperature-switch-connector",
      name: "Engine Metal Temperature Switch Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-mount",
      name: "Engine Mount",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-mount-bracket",
      name: "Engine Mount Bracket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil",
      name: "Engine Oil",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler",
      name: "Engine Oil Cooler",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-adapter-connector",
      name: "Engine Oil Cooler Adapter Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-adapter-seal",
      name: "Engine Oil Cooler Adapter Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-adapter-seal-set",
      name: "Engine Oil Cooler Adapter Seal Set",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-end-fitting",
      name: "Engine Oil Cooler End Fitting",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-gasket",
      name: "Engine Oil Cooler Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-gasket-set",
      name: "Engine Oil Cooler Gasket Set",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-hose-assembly",
      name: "Engine Oil Cooler Hose Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-hose-seal",
      name: "Engine Oil Cooler Hose Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-line",
      name: "Engine Oil Cooler Line",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-line-bolt",
      name: "Engine Oil Cooler Line Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-line-connector",
      name: "Engine Oil Cooler Line Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-line-o-ring",
      name: "Engine Oil Cooler Line O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-mounting-kit",
      name: "Engine Oil Cooler Mounting Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-o-ring",
      name: "Engine Oil Cooler O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-seal",
      name: "Engine Oil Cooler Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-cooler-thermostat-housing-o-ring",
      name: "Engine Oil Cooler Thermostat Housing O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-dipstick",
      name: "Engine Oil Dipstick",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-dipstick-flange-repair-kit",
      name: "Engine Oil Dipstick Flange Repair Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-dipstick-tube",
      name: "Engine Oil Dipstick Tube",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-dipstick-tube-funnel",
      name: "Engine Oil Dipstick Tube Funnel",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-drain-plug",
      name: "Engine Oil Drain Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-drain-plug-gasket",
      name: "Engine Oil Drain Plug Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-drainback-valve",
      name: "Engine Oil Drainback Valve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filler-cap",
      name: "Engine Oil Filler Cap",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filler-cap-seal",
      name: "Engine Oil Filler Cap Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filler-tube",
      name: "Engine Oil Filler Tube",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filler-tube-grommet",
      name: "Engine Oil Filler Tube Grommet",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter",
      name: "Engine Oil Filter",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-adapter-gasket",
      name: "Engine Oil Filter Adapter Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-adapter-gasket-set",
      name: "Engine Oil Filter Adapter Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-adapter-o-ring",
      name: "Engine Oil Filter Adapter O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-adapter-seal",
      name: "Engine Oil Filter Adapter Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-adapter-seal-set",
      name: "Engine Oil Filter Adapter Seal Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-bypass-valve",
      name: "Engine Oil Filter Bypass Valve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-cap",
      name: "Engine Oil Filter Cap",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-cover",
      name: "Engine Oil Filter Cover",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-cover-o-ring",
      name: "Engine Oil Filter Cover O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-element",
      name: "Engine Oil Filter Element",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-gasket",
      name: "Engine Oil Filter Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-housing-gasket",
      name: "Engine Oil Filter Housing Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-housing-o-ring",
      name: "Engine Oil Filter Housing O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-housing-return-tube",
      name: "Engine Oil Filter Housing Return Tube",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-filter-kit",
      name: "Engine Oil Filter Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-indicator-connector",
      name: "Engine Oil Level Indicator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-indicator-light-bulb",
      name: "Engine Oil Level Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-relay",
      name: "Engine Oil Level Relay",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-relay-connector",
      name: "Engine Oil Level Relay Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-sensor",
      name: "Engine Oil Level Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-level-sensor-connector",
      name: "Engine Oil Level Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-line",
      name: "Engine Oil Line",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan",
      name: "Engine Oil Pan",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan-bolt",
      name: "Engine Oil Pan Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan-cover-gasket",
      name: "Engine Oil Pan Cover Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan-gasket",
      name: "Engine Oil Pan Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan-gasket-set",
      name: "Engine Oil Pan Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pan-kit",
      name: "Engine Oil Pan Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-filter",
      name: "Engine Oil Pressure Filter",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-gauge",
      name: "Engine Oil Pressure Gauge",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-gauge-connector",
      name: "Engine Oil Pressure Gauge Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-indicator-connector",
      name: "Engine Oil Pressure Indicator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-sender",
      name: "Engine Oil Pressure Sender",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-sensor",
      name: "Engine Oil Pressure Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-sensor-connector",
      name: "Engine Oil Pressure Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-sensor-filter",
      name: "Engine Oil Pressure Sensor Filter",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pressure-switch",
      name: "Engine Oil Pressure Switch",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump",
      name: "Engine Oil Pump",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-bushing",
      name: "Engine Oil Pump Bushing",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-cover-bolt",
      name: "Engine Oil Pump Cover Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-drain-plug",
      name: "Engine Oil Pump Drain Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-drive-adapter-seal",
      name: "Engine Oil Pump Drive Adapter Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-drive-seal",
      name: "Engine Oil Pump Drive Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-gasket",
      name: "Engine Oil Pump Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-gasket-kit",
      name: "Engine Oil Pump Gasket Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-housing-seal",
      name: "Engine Oil Pump Housing Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-o-ring",
      name: "Engine Oil Pump O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-pickup-tube-gasket",
      name: "Engine Oil Pump Pickup Tube Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-pickup-tube-o-ring",
      name: "Engine Oil Pump Pickup Tube O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-pump-seal",
      name: "Engine Oil Pump Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-separator-cover",
      name: "Engine Oil Separator Cover",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-separator-hose",
      name: "Engine Oil Separator Hose",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-stand-pipe-and-dummy-plug-kit",
      name: "Engine Oil Stand Pipe and Dummy Plug Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-sump-sealing-compound",
      name: "Engine Oil Sump Sealing Compound",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-sender",
      name: "Engine Oil Temperature Sender",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-sender-connector",
      name: "Engine Oil Temperature Sender Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-sensor",
      name: "Engine Oil Temperature Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-sensor-connector",
      name: "Engine Oil Temperature Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-switch",
      name: "Engine Oil Temperature Switch",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-temperature-switch-connector",
      name: "Engine Oil Temperature Switch Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-thermostat-o-ring",
      name: "Engine Oil Thermostat O-Ring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-oil-tube",
      name: "Engine Oil Tube",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-push-rod-cover-gasket-set",
      name: "Engine Push Rod Cover Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-push-rod-gasket-set",
      name: "Engine Push Rod Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-shutdown-switch-harness-connector",
      name: "Engine Shutdown Switch Harness Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-speed-control-governor-wiring-connector",
      name: "Engine Speed Control Governor Wiring Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-speed-sensor-connector",
      name: "Engine Speed Sensor Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt",
      name: "Engine Timing Belt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-component-kit",
      name: "Engine Timing Belt Component Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-kit-with-water-pump",
      name: "Engine Timing Belt Kit with Water Pump",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-tensioner",
      name: "Engine Timing Belt Tensioner",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-tensioner-hydraulic-assembly",
      name: "Engine Timing Belt Tensioner Hydraulic Assembly",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-tensioner-pulley",
      name: "Engine Timing Belt Tensioner Pulley",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-belt-tensioner-spring",
      name: "Engine Timing Belt Tensioner Spring",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-camshaft-sprocket",
      name: "Engine Timing Camshaft Sprocket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain",
      name: "Engine Timing Chain",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-case-cover-nut",
      name: "Engine Timing Chain Case Cover Nut",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-guide-bolt",
      name: "Engine Timing Chain Guide Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-kit",
      name: "Engine Timing Chain Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-tensioner",
      name: "Engine Timing Chain Tensioner",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-tensioner-bolt",
      name: "Engine Timing Chain Tensioner Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-tensioner-connector",
      name: "Engine Timing Chain Tensioner Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-chain-tensioner-kit",
      name: "Engine Timing Chain Tensioner Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover",
      name: "Engine Timing Cover",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-bolt",
      name: "Engine Timing Cover Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-gasket",
      name: "Engine Timing Cover Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-gasket-set",
      name: "Engine Timing Cover Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-harmonic-balancer-sleeve",
      name: "Engine Timing Cover Harmonic Balancer Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-plug",
      name: "Engine Timing Cover Plug",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-repair-sleeve",
      name: "Engine Timing Cover Repair Sleeve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-seal",
      name: "Engine Timing Cover Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-seal-kit",
      name: "Engine Timing Cover Seal Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-cover-sealing-compound",
      name: "Engine Timing Cover Sealing Compound",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-damper-kit",
      name: "Engine Timing Damper Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-idler",
      name: "Engine Timing Idler",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-timing-idler-sprocket",
      name: "Engine Timing Idler Sprocket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-torque-strut",
      name: "Engine Torque Strut",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-torque-strut-bushing",
      name: "Engine Torque Strut Bushing",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-torque-strut-mount",
      name: "Engine Torque Strut Mount",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover",
      name: "Engine Valve Cover",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-bolt",
      name: "Engine Valve Cover Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-gasket",
      name: "Engine Valve Cover Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-gasket-set",
      name: "Engine Valve Cover Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-grommet",
      name: "Engine Valve Cover Grommet",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-grommet-set",
      name: "Engine Valve Cover Grommet Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-mount",
      name: "Engine Valve Cover Mount",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-seal",
      name: "Engine Valve Cover Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-cover-sealant",
      name: "Engine Valve Cover Sealant",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-deactivation-solenoid-connector",
      name: "Engine Valve Deactivation Solenoid Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-lifter",
      name: "Engine Valve Lifter",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-lifter-guide",
      name: "Engine Valve Lifter Guide",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-lifter-locking-bar",
      name: "Engine Valve Lifter Locking Bar",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-lifter-oil-manifold-connector",
      name: "Engine Valve Lifter Oil Manifold Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-lifter-oil-manifold-gasket",
      name: "Engine Valve Lifter Oil Manifold Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-valve-stem-oil-seal-set",
      name: "Engine Valve Stem Oil Seal Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-lift-eccentric-shaft-actuator",
      name: "Engine Variable Valve Lift Eccentric Shaft Actuator",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-adjuster",
      name: "Engine Variable Valve Timing (VVT) Adjuster",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-adjuster-gasket",
      name: "Engine Variable Valve Timing (VVT) Adjuster Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-adjuster-magnet",
      name: "Engine Variable Valve Timing (VVT) Adjuster Magnet",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-eccentric-shaft-position-sensor",
      name: "Engine Variable Valve Timing (VVT) Eccentric Shaft Position Sensor",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-eccentric-shaft-sensor-seal",
      name: "Engine Variable Valve Timing (VVT) Eccentric Shaft Sensor Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-oil-control-valve",
      name: "Engine Variable Valve Timing (VVT) Oil Control Valve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-oil-pressure-switch",
      name: "Engine Variable Valve Timing (VVT) Oil Pressure Switch",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-oil-pressure-switch-connector",
      name: "Engine Variable Valve Timing (VVT) Oil Pressure Switch Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-sensor-seal",
      name: "Engine Variable Valve Timing (VVT) Sensor Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid",
      name: "Engine Variable Valve Timing (VVT) Solenoid",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-bolt",
      name: "Engine Variable Valve Timing (VVT) Solenoid Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-connector",
      name: "Engine Variable Valve Timing (VVT) Solenoid Connector",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-filter",
      name: "Engine Variable Valve Timing (VVT) Solenoid Filter",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-filter-gasket",
      name: "Engine Variable Valve Timing (VVT) Solenoid Filter Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-gasket",
      name: "Engine Variable Valve Timing (VVT) Solenoid Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-gasket-kit",
      name: "Engine Variable Valve Timing (VVT) Solenoid Gasket Kit",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-pressure-valve",
      name: "Engine Variable Valve Timing (VVT) Solenoid Pressure Valve",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-solenoid-seal",
      name: "Engine Variable Valve Timing (VVT) Solenoid Seal",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-sprocket",
      name: "Engine Variable Valve Timing (VVT) Sprocket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-variable-valve-timing-vvt-sprocket-bolt",
      name: "Engine Variable Valve Timing (VVT) Sprocket Bolt",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump",
      name: "Engine Water Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-backing-plate-gasket",
      name: "Engine Water Pump Backing Plate Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-bolt",
      name: "Engine Water Pump Bolt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-bolt-kit",
      name: "Engine Water Pump Bolt Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-bypass-pipe-o-ring-kit",
      name: "Engine Water Pump Bypass Pipe O-Ring Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-connector",
      name: "Engine Water Pump Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-coupling",
      name: "Engine Water Pump Coupling",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-cover-gasket",
      name: "Engine Water Pump Cover Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-gasket",
      name: "Engine Water Pump Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-gasket-kit",
      name: "Engine Water Pump Gasket Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-housing-gasket",
      name: "Engine Water Pump Housing Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-housing-o-ring",
      name: "Engine Water Pump Housing O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-inlet-pipe-o-ring",
      name: "Engine Water Pump Inlet Pipe O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-inlet-tube",
      name: "Engine Water Pump Inlet Tube",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-installation-kit",
      name: "Engine Water Pump Installation Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-o-ring",
      name: "Engine Water Pump O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-outlet-pipe-gasket",
      name: "Engine Water Pump Outlet Pipe Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-pulley",
      name: "Engine Water Pump Pulley",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-pulley-bolt-cover",
      name: "Engine Water Pump Pulley Bolt Cover",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-relay",
      name: "Engine Water Pump Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-relay-connector",
      name: "Engine Water Pump Relay Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-seal",
      name: "Engine Water Pump Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-stud-kit",
      name: "Engine Water Pump Stud Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-water-pump-with-fan-clutch",
      name: "Engine Water Pump with Fan Clutch",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "engine-wiring-harness-connector",
      name: "Engine Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-wiring-harness-junction-block-connector",
      name: "Engine Wiring Harness Junction Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-wiring-harness-relay",
      name: "Engine Wiring Harness Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-wiring-harness-relay-connector",
      name: "Engine Wiring Harness Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "engine-wiring-harness-strap",
      name: "Engine Wiring Harness Strap",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-control-system-pressure-sensor-connector",
      name: "Evaporative Control System Pressure Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-leak-detection-pump",
      name: "Evaporative Emissions System Leak Detection Pump",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-leak-detection-pump-connector",
      name: "Evaporative Emissions System Leak Detection Pump Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-lines",
      name: "Evaporative Emissions System Lines",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-pressure-sensor",
      name: "Evaporative Emissions System Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-purge-flow-sensor",
      name: "Evaporative Emissions System Purge Flow Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "evaporative-emissions-system-purge-flow-sensor-connector",
      name: "Evaporative Emissions System Purge Flow Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-backpressure-sensor",
      name: "Exhaust Backpressure Sensor",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-backpressure-sensor-connector",
      name: "Exhaust Backpressure Sensor Connector",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-bolt",
      name: "Exhaust Bolt",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-bolt-and-spring",
      name: "Exhaust Bolt and Spring",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-clamp",
      name: "Exhaust Clamp",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-control-valve-actuator-connector",
      name: "Exhaust Control Valve Actuator Connector",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-crossover-gasket",
      name: "Exhaust Crossover Gasket",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-flange-stud-and-nut",
      name: "Exhaust Flange Stud and Nut",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-differential-pressure-sensor",
      name: "Exhaust Gas Differential Pressure Sensor",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-differential-pressure-sensor-connector",
      name: "Exhaust Gas Differential Pressure Sensor Connector",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-ignition-relay",
      name: "Exhaust Gas Ignition Relay",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-cooler-gasket",
      name: "Exhaust Gas Recirculation (EGR) Cooler Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-cooler-hose",
      name: "Exhaust Gas Recirculation (EGR) Cooler Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-gasket-set",
      name: "Exhaust Gas Recirculation (EGR) Gasket Set",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-line",
      name: "Exhaust Gas Recirculation (EGR) Line",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-line-gasket",
      name: "Exhaust Gas Recirculation (EGR) Line Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pipe-gasket",
      name: "Exhaust Gas Recirculation (EGR) Pipe Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pipe-seal",
      name: "Exhaust Gas Recirculation (EGR) Pipe Seal",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pressure-feedback-hose",
      name: "Exhaust Gas Recirculation (EGR) Pressure Feedback Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pressure-feedback-sensor-connector",
      name: "Exhaust Gas Recirculation (EGR) Pressure Feedback Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pressure-sensor",
      name: "Exhaust Gas Recirculation (EGR) Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-pulse-width-modulation-valve-solenoid-connector",
      name: "Exhaust Gas Recirculation (EGR) Pulse Width Modulation Valve Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-sensor-connector",
      name: "Exhaust Gas Recirculation (EGR) Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-solenoid-valve-connector",
      name: "Exhaust Gas Recirculation (EGR) Solenoid Valve Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-system-module-connector",
      name: "Exhaust Gas Recirculation (EGR) System Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-time-delay-switch",
      name: "Exhaust Gas Recirculation (EGR) Time Delay Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-time-delay-switch-connector",
      name: "Exhaust Gas Recirculation (EGR) Time Delay Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-tube",
      name: "Exhaust Gas Recirculation (EGR) Tube",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-tube-clip",
      name: "Exhaust Gas Recirculation (EGR) Tube Clip",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-tube-connector",
      name: "Exhaust Gas Recirculation (EGR) Tube Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-tube-gasket",
      name: "Exhaust Gas Recirculation (EGR) Tube Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-tube-seal",
      name: "Exhaust Gas Recirculation (EGR) Tube Seal",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-vacuum-modulator-connector",
      name: "Exhaust Gas Recirculation (EGR) Vacuum Modulator Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-vacuum-regulator-solenoid-connector",
      name: "Exhaust Gas Recirculation (EGR) Vacuum Regulator Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve",
      name: "Exhaust Gas Recirculation (EGR) Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-adapter-opening-cover-bolt",
      name: "Exhaust Gas Recirculation (EGR) Valve Adapter Opening Cover Bolt",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-connector",
      name: "Exhaust Gas Recirculation (EGR) Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-control-relay-connector",
      name: "Exhaust Gas Recirculation (EGR) Valve Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-control-solenoid",
      name: "Exhaust Gas Recirculation (EGR) Valve Control Solenoid",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-control-solenoid-connector",
      name: "Exhaust Gas Recirculation (EGR) Valve Control Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-cover-gasket",
      name: "Exhaust Gas Recirculation (EGR) Valve Cover Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-gasket",
      name: "Exhaust Gas Recirculation (EGR) Valve Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-kit",
      name: "Exhaust Gas Recirculation (EGR) Valve Kit",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-motor-connector",
      name: "Exhaust Gas Recirculation (EGR) Valve Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-position-sensor",
      name: "Exhaust Gas Recirculation (EGR) Valve Position Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-seal",
      name: "Exhaust Gas Recirculation (EGR) Valve Seal",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-recirculation-egr-valve-temperature-sensor",
      name: "Exhaust Gas Recirculation (EGR) Valve Temperature Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-temperature-egt-sensor",
      name: "Exhaust Gas Temperature (EGT) Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-temperature-egt-sensor-bung-repair-kit",
      name: "Exhaust Gas Temperature (EGT) Sensor Bung Repair Kit",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-gas-temperature-egt-sensor-connector",
      name: "Exhaust Gas Temperature (EGT) Sensor Connector",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold",
      name: "Exhaust Manifold",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-bolt-and-spring",
      name: "Exhaust Manifold Bolt and Spring",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-gasket",
      name: "Exhaust Manifold Gasket",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-gasket-set",
      name: "Exhaust Manifold Gasket Set",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-hardware-kit",
      name: "Exhaust Manifold Hardware Kit",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-stud-and-nut",
      name: "Exhaust Manifold Stud and Nut",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-manifold-to-cylinder-head-repair-clamp",
      name: "Exhaust Manifold to Cylinder Head Repair Clamp",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-pipe-flange-gasket",
      name: "Exhaust Pipe Flange Gasket",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-pipe-to-manifold-gasket",
      name: "Exhaust Pipe to Manifold Gasket",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-pressure-regulator-valve-connector",
      name: "Exhaust Pressure Regulator Valve Connector",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exhaust-spring",
      name: "Exhaust Spring",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "exterior-door-handle",
      name: "Exterior Door Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "exterior-door-handle-reinforcement",
      name: "Exterior Door Handle Reinforcement",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "exterior-door-handle-switch-assembly-connector",
      name: "Exterior Door Handle Switch Assembly Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "exterior-light-bulb-socket",
      name: "Exterior Light Bulb Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fan-dropping-resistor-connector",
      name: "Fan Dropping Resistor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "fast-idle-valve-solenoid",
      name: "Fast Idle Valve Solenoid",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fast-idle-valve-solenoid-relay",
      name: "Fast Idle Valve Solenoid Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fast-idle-valve-solenoid-relay-connector",
      name: "Fast Idle Valve Solenoid Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "flasher-connector",
      name: "Flasher Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "flasher-relay-connector",
      name: "Flasher Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "flex-fuel-sensor",
      name: "Flex Fuel Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "flex-fuel-sensor-connector",
      name: "Flex Fuel Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "flex-fuel-vapor-sensor-connector",
      name: "Flex Fuel Vapor Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "flood-light-connector",
      name: "Flood Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "floor-console-compartment-light-bulb",
      name: "Floor Console Compartment Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "floor-console-compartment-light-connector",
      name: "Floor Console Compartment Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "floor-console-harness-connector",
      name: "Floor Console Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-driving-light-connector",
      name: "Fog / Driving Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-driving-light-wiring-harness-clip",
      name: "Fog / Driving Light Wiring Harness Clip",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light",
      name: "Fog Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-assembly",
      name: "Fog Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-bulb",
      name: "Fog Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-connector",
      name: "Fog Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-cut-off-relay",
      name: "Fog Light Cut-Off Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-cut-off-relay-connector",
      name: "Fog Light Cut-Off Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-relay",
      name: "Fog Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-relay-connector",
      name: "Fog Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-socket",
      name: "Fog Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-switch",
      name: "Fog Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fog-light-switch-connector",
      name: "Fog Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "footwell-courtesy-light-connector",
      name: "Footwell Courtesy Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "forward-light-harness-clip",
      name: "Forward Light Harness Clip",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "forward-light-harness-connector",
      name: "Forward Light Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "forward-light-harness-ground-bolt",
      name: "Forward Light Harness Ground Bolt",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "friction-modifier",
      name: "Friction Modifier",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "front-drive-clutch-actuator-solenoid-connector",
      name: "Front Drive Clutch Actuator Solenoid Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-cap-tester-adapter",
      name: "Fuel Cap Tester Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-charging-wiring-assembly",
      name: "Fuel Charging Wiring Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-cut-off-relay",
      name: "Fuel Cut-Off Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-cut-off-relay-connector",
      name: "Fuel Cut-Off Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-door-hinge",
      name: "Fuel Door Hinge",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-door-release-repair-kit",
      name: "Fuel Door Release Repair Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-door-spring",
      name: "Fuel Door Spring",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-feed-line",
      name: "Fuel Feed Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-feed-pipe-o-ring",
      name: "Fuel Feed Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-lock-actuator-connector",
      name: "Fuel Filler Door Lock Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-lock-solenoid-connector",
      name: "Fuel Filler Door Lock Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-relay",
      name: "Fuel Filler Door Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-relay-connector",
      name: "Fuel Filler Door Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-switch",
      name: "Fuel Filler Door Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-door-switch-connector",
      name: "Fuel Filler Door Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-neck",
      name: "Fuel Filler Neck",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filler-neck-seal",
      name: "Fuel Filler Neck Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter",
      name: "Fuel Filter",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-cap",
      name: "Fuel Filter Cap",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-cap-to-fuel-pump-gasket",
      name: "Fuel Filter Cap to Fuel Pump Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-housing",
      name: "Fuel Filter Housing",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-kit",
      name: "Fuel Filter Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-mount",
      name: "Fuel Filter Mount",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-o-ring",
      name: "Fuel Filter O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-primer-housing-seal-kit",
      name: "Fuel Filter Primer Housing Seal Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-filter-spring",
      name: "Fuel Filter Spring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-gauge-connector",
      name: "Fuel Gauge Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-heater-connector",
      name: "Fuel Heater Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-hose",
      name: "Fuel Hose",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-hose-clamp",
      name: "Fuel Hose Clamp",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-cold-advance-solenoid-relay",
      name: "Fuel Injection Cold Advance Solenoid Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-cold-start-relay",
      name: "Fuel Injection Cold Start Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-cold-start-relay-connector",
      name: "Fuel Injection Cold Start Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-cold-start-valve-connector",
      name: "Fuel Injection Cold Start Valve Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-distributor",
      name: "Fuel Injection Fuel Distributor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-distributor-connector",
      name: "Fuel Injection Fuel Distributor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-and-return-pipe-seal-kit",
      name: "Fuel Injection Fuel Feed and Return Pipe Seal Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-hose",
      name: "Fuel Injection Fuel Feed Hose",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-hose-o-ring",
      name: "Fuel Injection Fuel Feed Hose O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-hose-seal",
      name: "Fuel Injection Fuel Feed Hose Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-pipe",
      name: "Fuel Injection Fuel Feed Pipe",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-feed-pipe-o-ring",
      name: "Fuel Injection Fuel Feed Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-rail-o-ring-kit",
      name: "Fuel Injection Fuel Rail O-Ring Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-rail-pressure-relief-valve",
      name: "Fuel Injection Fuel Rail Pressure Relief Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-rail-pressure-sensor",
      name: "Fuel Injection Fuel Rail Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-fuel-return-pipe-o-ring",
      name: "Fuel Injection Fuel Return Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-harness",
      name: "Fuel Injection Harness",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-harness-connector",
      name: "Fuel Injection Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-idle-air-control-valve",
      name: "Fuel Injection Idle Air Control Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-idle-air-control-valve-gasket",
      name: "Fuel Injection Idle Air Control Valve Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-idle-air-control-valve-seal",
      name: "Fuel Injection Idle Air Control Valve Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-idle-speed-stabilizer-connector",
      name: "Fuel Injection Idle Speed Stabilizer Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-injection-pump-relay",
      name: "Fuel Injection Injection Pump Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-main-relay",
      name: "Fuel Injection Main Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-main-relay-connector",
      name: "Fuel Injection Main Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-manifold-pressure-sensor",
      name: "Fuel Injection Manifold Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-multi-port-tune-up-kit",
      name: "Fuel Injection Multi-Port Tune-up Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-nozzle-o-ring-kit",
      name: "Fuel Injection Nozzle O-Ring Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-plenum-gasket",
      name: "Fuel Injection Plenum Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-plenum-gasket-set",
      name: "Fuel Injection Plenum Gasket Set",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-plenum-o-ring",
      name: "Fuel Injection Plenum O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-damper",
      name: "Fuel Injection Pressure Damper",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-regulator",
      name: "Fuel Injection Pressure Regulator",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-regulator-connector",
      name: "Fuel Injection Pressure Regulator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-regulator-o-ring",
      name: "Fuel Injection Pressure Regulator O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-regulator-seal",
      name: "Fuel Injection Pressure Regulator Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-regulator-vacuum-line-connector",
      name: "Fuel Injection Pressure Regulator Vacuum Line Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pressure-sensor",
      name: "Fuel Injection Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-pump",
      name: "Fuel Injection Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-relay",
      name: "Fuel Injection Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-return-line-gasket-kit",
      name: "Fuel Injection Return Line Gasket Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body",
      name: "Fuel Injection Throttle Body",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-assembly",
      name: "Fuel Injection Throttle Body Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-cover-gasket",
      name: "Fuel Injection Throttle Body Cover Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-heater-pipe",
      name: "Fuel Injection Throttle Body Heater Pipe",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-heater-pipe-o-ring",
      name: "Fuel Injection Throttle Body Heater Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-injection-kit",
      name: "Fuel Injection Throttle Body Injection Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-mounting-gasket",
      name: "Fuel Injection Throttle Body Mounting Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-mounting-gasket-set",
      name: "Fuel Injection Throttle Body Mounting Gasket Set",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-mounting-o-ring",
      name: "Fuel Injection Throttle Body Mounting O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-pipe-o-ring",
      name: "Fuel Injection Throttle Body Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-repair-kit",
      name: "Fuel Injection Throttle Body Repair Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-seal",
      name: "Fuel Injection Throttle Body Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-body-valve-rod-retainer-bushing",
      name: "Fuel Injection Throttle Body Valve Rod Retainer Bushing",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-throttle-control-actuator-module",
      name: "Fuel Injection Throttle Control Actuator Module",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injection-warm-up-regulator-connector",
      name: "Fuel Injection Warm Up Regulator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector",
      name: "Fuel Injector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-and-insulator-retainer-kit",
      name: "Fuel Injector and Insulator Retainer Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-connector",
      name: "Fuel Injector Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-control-module",
      name: "Fuel Injector Control Module",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-fuel-return-hose-seal",
      name: "Fuel Injector Fuel Return Hose Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-harness-connector",
      name: "Fuel Injector Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-kit",
      name: "Fuel Injector Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-line",
      name: "Fuel Injector Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-o-ring",
      name: "Fuel Injector O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-o-ring-kit",
      name: "Fuel Injector O-Ring Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-rail",
      name: "Fuel Injector Rail",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-rail-bolt",
      name: "Fuel Injector Rail Bolt",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-repair-kit",
      name: "Fuel Injector Repair Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-retaining-bracket",
      name: "Fuel Injector Retaining Bracket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-seal",
      name: "Fuel Injector Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-seal-kit",
      name: "Fuel Injector Seal Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-sleeve",
      name: "Fuel Injector Sleeve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-injector-wiring-harness-clip",
      name: "Fuel Injector Wiring Harness Clip",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-level-gauge-connector",
      name: "Fuel Level Gauge Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-level-sensor",
      name: "Fuel Level Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-level-sensor-connector",
      name: "Fuel Level Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-lift-pump",
      name: "Fuel Lift Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-lift-pump-connector",
      name: "Fuel Lift Pump Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-line",
      name: "Fuel Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-line-clip",
      name: "Fuel Line Clip",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-line-connector",
      name: "Fuel Line Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-line-retainer",
      name: "Fuel Line Retainer",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-line-seal-ring",
      name: "Fuel Line Seal Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-management-wiring-harness",
      name: "Fuel Management Wiring Harness",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-meter-wiring-harness-connector",
      name: "Fuel Meter Wiring Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-regulator",
      name: "Fuel Pressure Regulator",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-regulator-service-kit",
      name: "Fuel Pressure Regulator Service Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-relief-valve-cap",
      name: "Fuel Pressure Relief Valve Cap",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-sensor",
      name: "Fuel Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-sensor-connector",
      name: "Fuel Pressure Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pressure-sensor-cover",
      name: "Fuel Pressure Sensor Cover",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump",
      name: "Fuel Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-sending-unit-connector",
      name: "Fuel Pump / Sending Unit Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-and-engine-oil-pressure-indicator-switch",
      name: "Fuel Pump and Engine Oil Pressure Indicator Switch",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-and-sender-assembly",
      name: "Fuel Pump and Sender Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-and-strainer-set",
      name: "Fuel Pump and Strainer Set",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-block-off-plate-gasket",
      name: "Fuel Pump Block-Off Plate Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-bypass-relay",
      name: "Fuel Pump Bypass Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-connector",
      name: "Fuel Pump Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-control-module",
      name: "Fuel Pump Control Module",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-control-module-connector",
      name: "Fuel Pump Control Module Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-cut-off-switch",
      name: "Fuel Pump Cut-Off Switch",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-cut-off-switch-connector",
      name: "Fuel Pump Cut-Off Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-cycle-control-module-connector",
      name: "Fuel Pump Cycle Control Module Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-driver-module",
      name: "Fuel Pump Driver Module",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-driver-module-connector",
      name: "Fuel Pump Driver Module Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-gasket",
      name: "Fuel Pump Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-hanger",
      name: "Fuel Pump Hanger",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-hanger-assembly",
      name: "Fuel Pump Hanger Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-harness-connector",
      name: "Fuel Pump Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-jumper-harness-kit",
      name: "Fuel Pump Jumper Harness Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-module-assembly",
      name: "Fuel Pump Module Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-mounting-gasket",
      name: "Fuel Pump Mounting Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-mounting-kit",
      name: "Fuel Pump Mounting Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-o-ring",
      name: "Fuel Pump O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-plate-gasket",
      name: "Fuel Pump Plate Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-pressure-switch-connector",
      name: "Fuel Pump Pressure Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-push-rod",
      name: "Fuel Pump Push Rod",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-relay",
      name: "Fuel Pump Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-relay-connector",
      name: "Fuel Pump Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-spacer",
      name: "Fuel Pump Spacer",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-strainer",
      name: "Fuel Pump Strainer",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-tank-seal",
      name: "Fuel Pump Tank Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-pump-wiring-harness",
      name: "Fuel Pump Wiring Harness",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-rail-pressure-sensor-connector",
      name: "Fuel Rail Pressure Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-return-pipe-o-ring",
      name: "Fuel Return Pipe O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-sender-connector",
      name: "Fuel Sender Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-sender-control-module-connector",
      name: "Fuel Sender Control Module Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-shut-off-solenoid",
      name: "Fuel Shut-Off Solenoid",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-shut-off-solenoid-connector",
      name: "Fuel Shut-Off Solenoid Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-supply-hose",
      name: "Fuel Supply Hose",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank",
      name: "Fuel Tank",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-attaching-hardware",
      name: "Fuel Tank Attaching Hardware",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-bolt",
      name: "Fuel Tank Bolt",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-cap",
      name: "Fuel Tank Cap",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-harness-connector",
      name: "Fuel Tank Harness Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-lock-ring",
      name: "Fuel Tank Lock Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-pressure-sensor",
      name: "Fuel Tank Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-pressure-sensor-connector",
      name: "Fuel Tank Pressure Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-pressure-switch-connector",
      name: "Fuel Tank Pressure Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-pressure-transducer-sensor-connector",
      name: "Fuel Tank Pressure Transducer Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-selector-switch",
      name: "Fuel Tank Selector Switch",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-selector-switch-connector",
      name: "Fuel Tank Selector Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-selector-valve",
      name: "Fuel Tank Selector Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-selector-valve-connector",
      name: "Fuel Tank Selector Valve Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sender-and-balance-pump-control-relay",
      name: "Fuel Tank Sender and Balance Pump Control Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sender-assembly",
      name: "Fuel Tank Sender Assembly",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit",
      name: "Fuel Tank Sending Unit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit-connector",
      name: "Fuel Tank Sending Unit Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit-gasket",
      name: "Fuel Tank Sending Unit Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit-lock-ring",
      name: "Fuel Tank Sending Unit Lock Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit-o-ring",
      name: "Fuel Tank Sending Unit O-Ring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-sending-unit-seal",
      name: "Fuel Tank Sending Unit Seal",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-strap",
      name: "Fuel Tank Strap",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-temperature-sensor-connector",
      name: "Fuel Tank Temperature Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-vent-hose-retainer",
      name: "Fuel Tank Vent Hose Retainer",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-vent-valve",
      name: "Fuel Tank Vent Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-tank-vent-valve-connector",
      name: "Fuel Tank Vent Valve Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-temperature-sensor",
      name: "Fuel Temperature Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-temperature-sensor-connector",
      name: "Fuel Temperature Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-transfer-unit",
      name: "Fuel Transfer Unit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-vapor-leak-detection-pump-connector",
      name: "Fuel Vapor Leak Detection Pump Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-vapor-pressure-sensor-connector",
      name: "Fuel Vapor Pressure Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-volume-regulator-solenoid-connector",
      name: "Fuel Volume Regulator Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-water-separator-filter",
      name: "Fuel Water Separator Filter",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuel-water-separator-filter-sensor",
      name: "Fuel Water Separator Filter Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "fuse-block",
      name: "Fuse Block",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuse-block-connector",
      name: "Fuse Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuse-box-connector",
      name: "Fuse Box Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "fuse-connector",
      name: "Fuse Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "gear-shift-select-switch-connector",
      name: "Gear Shift Select Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "generator",
      name: "Generator",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "generator-commutator-end-bearing",
      name: "Generator Commutator End Bearing",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "generator-connector",
      name: "Generator Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "generator-current-sensor-connector",
      name: "Generator Current Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "generator-drive-end-bearing",
      name: "Generator Drive End Bearing",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "glove-box-latch-actuator-relay",
      name: "Glove Box Latch Actuator Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "glove-box-light-bulb",
      name: "Glove Box Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "glove-box-light-connector",
      name: "Glove Box Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "gps-antenna-connector",
      name: "GPS Antenna Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "gps-navigation-system-connector",
      name: "GPS Navigation System Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "grab-handle",
      name: "Grab Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "grille-shutter-actuator-and-solenoid-connector",
      name: "Grille Shutter Actuator and Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ground-block-connector",
      name: "Ground Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "halo-ring-bulb",
      name: "Halo Ring Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hand-punch",
      name: "Hand Punch",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-light-bulb",
      name: "Hazard Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-and-turn-signal-flasher",
      name: "Hazard Warning and Turn Signal Flasher",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-flasher",
      name: "Hazard Warning Flasher",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-flasher-connector",
      name: "Hazard Warning Flasher Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-indicator-light-connector",
      name: "Hazard Warning Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-module-connector",
      name: "Hazard Warning Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-relay",
      name: "Hazard Warning Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-relay-connector",
      name: "Hazard Warning Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-switch",
      name: "Hazard Warning Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hazard-warning-switch-connector",
      name: "Hazard Warning Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight",
      name: "Headlight",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-actuator-connector",
      name: "Headlight Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-actuator-relay",
      name: "Headlight Actuator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-adjusting-screw",
      name: "Headlight Adjusting Screw",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-assembly",
      name: "Headlight Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-ballast-connector",
      name: "Headlight Ballast Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-bucket-kit",
      name: "Headlight Bucket Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-bulb",
      name: "Headlight Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-bulb-retainer",
      name: "Headlight Bulb Retainer",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-check-relay",
      name: "Headlight Check Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-connector",
      name: "Headlight Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-control-module",
      name: "Headlight Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-control-module-connector",
      name: "Headlight Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-cut-off-relay",
      name: "Headlight Cut-Off Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-delay-relay",
      name: "Headlight Delay Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-dimmer-connector",
      name: "Headlight Dimmer Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-dimmer-switch",
      name: "Headlight Dimmer Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-dimmer-switch-connector",
      name: "Headlight Dimmer Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-dimmer-switch-relay",
      name: "Headlight Dimmer Switch Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-high-low-beam-light-connector",
      name: "Headlight High / Low Beam Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-high-beam-light-connector",
      name: "Headlight High Beam Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-lens-housing",
      name: "Headlight Lens Housing",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-level-motor-connector",
      name: "Headlight Level Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-level-sensor-connector",
      name: "Headlight Level Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-low-beam-light-connector",
      name: "Headlight Low Beam Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-motor-gear",
      name: "Headlight Motor Gear",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-motor-relay",
      name: "Headlight Motor Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-relay",
      name: "Headlight Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-relay-connector",
      name: "Headlight Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-retainer",
      name: "Headlight Retainer",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-retaining-ring",
      name: "Headlight Retaining Ring",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-socket",
      name: "Headlight Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-switch",
      name: "Headlight Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-switch-connector",
      name: "Headlight Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-switch-knob",
      name: "Headlight Switch Knob",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-switch-light-bulb",
      name: "Headlight Switch Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-washer-fluid-level-sensor",
      name: "Headlight Washer Fluid Level Sensor",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-washer-hose-clamp",
      name: "Headlight Washer Hose Clamp",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-washer-pump-connector",
      name: "Headlight Washer Pump Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-washer-relay",
      name: "Headlight Washer Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-washer-relay-connector",
      name: "Headlight Washer Relay Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-wiring-harness",
      name: "Headlight Wiring Harness",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headlight-wiring-harness-connector",
      name: "Headlight Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "headliner-harness-connector",
      name: "Headliner Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heads-up-display-connector",
      name: "Heads Up Display Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heads-up-display-switch-connector",
      name: "Heads Up Display Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heat-riser-gasket",
      name: "Heat Riser Gasket",
      categories: [
        {
          category_id: "exhaust",
          category_name: "Exhaust",
          position: 0,
        },
      ],
    },
    {
      id: "heated-door-mirror-relay-connector",
      name: "Heated Door Mirror Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-mirror-harness-connector",
      name: "Heated Mirror Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-mirror-relay",
      name: "Heated Mirror Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-seat-element-connector",
      name: "Heated Seat Element Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-seat-module-connector",
      name: "Heated Seat Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-seat-relay",
      name: "Heated Seat Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-seat-relay-connector",
      name: "Heated Seat Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-seat-switch-connector",
      name: "Heated Seat Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-thermostat-sensor-connector",
      name: "Heated Thermostat Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-water-shut-off-valve-actuator-connector",
      name: "Heated Water Shut-Off Valve Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heated-windshield-relay-connector",
      name: "Heated Windshield Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heater-control-light-bulb",
      name: "Heater Control Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "heater-coolant-heater-connector",
      name: "Heater Coolant Heater Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "heater-coolant-heater-relay-connector",
      name: "Heater Coolant Heater Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "heater-water-pump",
      name: "Heater Water Pump",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "heater-water-shut-off-valve-connector",
      name: "Heater Water Shut-Off Valve Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "heating-and-cooling-seat-module-connector",
      name: "Heating and Cooling Seat Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-beam-indicator-light",
      name: "High Beam Indicator Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-beam-indicator-light-bulb",
      name: "High Beam Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-beam-indicator-light-connector",
      name: "High Beam Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-intensity-discharge-hid-headlight-control-module",
      name: "High Intensity Discharge (HID) Headlight Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-intensity-discharge-hid-headlight-igniter",
      name: "High Intensity Discharge (HID) Headlight Igniter",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-intensity-discharge-hid-lighting-ballast",
      name: "High Intensity Discharge (HID) Lighting Ballast",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "high-pressure-oil-rail-o-ring-kit",
      name: "High Pressure Oil Rail O-Ring Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "high-voltage-circuit-impact-sensor-connector",
      name: "High Voltage Circuit Impact Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-ajar-indicator-switch-connector",
      name: "Hood Ajar Indicator Switch Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-latch-assembly",
      name: "Hood Latch Assembly",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-lift-support",
      name: "Hood Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-prop-rod-retainer",
      name: "Hood Prop Rod Retainer",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-release-cable",
      name: "Hood Release Cable",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hood-release-handle",
      name: "Hood Release Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn",
      name: "Horn",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn-connector",
      name: "Horn Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn-contact",
      name: "Horn Contact",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn-mount-bolt",
      name: "Horn Mount Bolt",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn-relay",
      name: "Horn Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "horn-relay-connector",
      name: "Horn Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hose-clamp",
      name: "Hose Clamp",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "hot-engine-indicator-light-bulb",
      name: "Hot Engine Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hub-assembly",
      name: "Hub Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "humidity-sensor",
      name: "Humidity Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-inlet-door-actuator",
      name: "HVAC Air Inlet Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-inlet-door-actuator-connector",
      name: "HVAC Air Inlet Door Actuator Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-inlet-door-actuator-module-connector",
      name: "HVAC Air Inlet Door Actuator Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-inlet-door-actuator-motor-connector",
      name: "HVAC Air Inlet Door Actuator Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-inlet-position-sensor-connector",
      name: "HVAC Air Inlet Position Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-air-mode-valve-actuator-connector",
      name: "HVAC Air Mode Valve Actuator Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-automatic-temperature-control-atc-relay",
      name: "HVAC Automatic Temperature Control (ATC) Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-automatic-temperature-control-atc-relay-connector",
      name: "HVAC Automatic Temperature Control (ATC) Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blend-door",
      name: "HVAC Blend Door",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blend-door-actuator",
      name: "HVAC Blend Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blend-door-motor-connector",
      name: "HVAC Blend Door Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blend-door-repair-kit",
      name: "HVAC Blend Door Repair Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-control-module",
      name: "HVAC Blower Control Module",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-control-switch",
      name: "HVAC Blower Control Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-control-switch-connector",
      name: "HVAC Blower Control Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor",
      name: "HVAC Blower Motor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-and-wheel",
      name: "HVAC Blower Motor and Wheel",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-assembly",
      name: "HVAC Blower Motor Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-connector",
      name: "HVAC Blower Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-control-module",
      name: "HVAC Blower Motor Control Module",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-control-unit-connector",
      name: "HVAC Blower Motor Control Unit Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-cooling-tube",
      name: "HVAC Blower Motor Cooling Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-cut-out-relay",
      name: "HVAC Blower Motor Cut-Out Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-high-speed-relay",
      name: "HVAC Blower Motor High Speed Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-high-speed-relay-connector",
      name: "HVAC Blower Motor High Speed Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-housing",
      name: "HVAC Blower Motor Housing",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-kit",
      name: "HVAC Blower Motor Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-low-speed-relay-connector",
      name: "HVAC Blower Motor Low Speed Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-regulator",
      name: "HVAC Blower Motor Regulator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-relay",
      name: "HVAC Blower Motor Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-relay-connector",
      name: "HVAC Blower Motor Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-resistor",
      name: "HVAC Blower Motor Resistor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-resistor-connector",
      name: "HVAC Blower Motor Resistor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-resistor-harness",
      name: "HVAC Blower Motor Resistor Harness",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-resistor-kit",
      name: "HVAC Blower Motor Resistor Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-switch",
      name: "HVAC Blower Motor Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-motor-wheel",
      name: "HVAC Blower Motor Wheel",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-relay",
      name: "HVAC Blower Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-relay-harness-connector",
      name: "HVAC Blower Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-switch-connector",
      name: "HVAC Blower Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-blower-switch-relay",
      name: "HVAC Blower Switch Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-clutch-coil-connector",
      name: "HVAC Clutch Coil Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-connector",
      name: "HVAC Control Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-duct-hose",
      name: "HVAC Control Duct Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-light-bulb",
      name: "HVAC Control Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-module",
      name: "HVAC Control Module",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-module-connector",
      name: "HVAC Control Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-module-sensor-connector",
      name: "HVAC Control Module Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-module-vacuum-harness-clip",
      name: "HVAC Control Module Vacuum Harness Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-panel",
      name: "HVAC Control Panel",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-panel-relay",
      name: "HVAC Control Panel Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-panel-resistor",
      name: "HVAC Control Panel Resistor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-relay-connector",
      name: "HVAC Control Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-select-switch-connector",
      name: "HVAC Control Select Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-solenoid-connector",
      name: "HVAC Control Solenoid Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-switch",
      name: "HVAC Control Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-vacuum-check-valve",
      name: "HVAC Control Vacuum Check Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-control-vacuum-control-valve",
      name: "HVAC Control Vacuum Control Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-cut-off-switch",
      name: "HVAC Cut-Off Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-defrost-mode-door-actuator",
      name: "HVAC Defrost Mode Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-defrost-valve",
      name: "HVAC Defrost Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-duct-air-temperature-sensor-connector",
      name: "HVAC Duct Air Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-electrical-connector",
      name: "HVAC Electrical Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-evaporator-heater-and-blower-module-connector",
      name: "HVAC Evaporator / Heater and Blower Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-evaporator-temperature-sensor-connector",
      name: "HVAC Evaporator Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-fast-idle-cut-off-relay",
      name: "HVAC Fast Idle Cut-Off Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-floor-mode-door-actuator",
      name: "HVAC Floor Mode Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-harness-connector",
      name: "HVAC Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-and-hvac-delay-relay",
      name: "HVAC Heater and HVAC Delay Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-assembly",
      name: "HVAC Heater Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-bypass-valve",
      name: "HVAC Heater Bypass Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-case-drain-hose",
      name: "HVAC Heater Case Drain Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-connector",
      name: "HVAC Heater Control Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-knob",
      name: "HVAC Heater Control Knob",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-switch",
      name: "HVAC Heater Control Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-switch-connector",
      name: "HVAC Heater Control Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-valve",
      name: "HVAC Heater Control Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-control-valve-connector",
      name: "HVAC Heater Control Valve Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core",
      name: "HVAC Heater Core",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-case-temperature-valve-seal",
      name: "HVAC Heater Core Case Temperature Valve Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-kit",
      name: "HVAC Heater Core Kit",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-o-ring",
      name: "HVAC Heater Core O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-temperature-sensor",
      name: "HVAC Heater Core Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-tube",
      name: "HVAC Heater Core Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-core-tube-seal",
      name: "HVAC Heater Core Tube Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose",
      name: "HVAC Heater Hose",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-assembly",
      name: "HVAC Heater Hose Assembly",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-bolt",
      name: "HVAC Heater Hose Bolt",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-connector",
      name: "HVAC Heater Hose Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-fitting",
      name: "HVAC Heater Hose Fitting",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-outlet-tube",
      name: "HVAC Heater Hose Outlet Tube",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-hose-retainer-clip",
      name: "HVAC Heater Hose Retainer Clip",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-pipe",
      name: "HVAC Heater Pipe",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-pipe-o-ring",
      name: "HVAC Heater Pipe O-Ring",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-relay",
      name: "HVAC Heater Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-water-flow-control-valve",
      name: "HVAC Heater Water Flow Control Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-heater-water-shut-off-valve",
      name: "HVAC Heater Water Shut-Off Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-door-actuator",
      name: "HVAC Mode Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-door-actuator-harness-connector",
      name: "HVAC Mode Door Actuator Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-door-motor",
      name: "HVAC Mode Door Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-door-vacuum-check-valve",
      name: "HVAC Mode Door Vacuum Check Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-valve",
      name: "HVAC Mode Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-mode-valve-actuator-motor-connector",
      name: "HVAC Mode Valve Actuator Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-power-module-atc-relay-harness-connector",
      name: "HVAC Power Module (ATC) Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-pressure-in-cycle-switch",
      name: "HVAC Pressure In Cycle Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-pressure-sensor-connector",
      name: "HVAC Pressure Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-pressure-switch",
      name: "HVAC Pressure Switch",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-pressure-switch-connector",
      name: "HVAC Pressure Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-pressure-switch-seal",
      name: "HVAC Pressure Switch Seal",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-programmer-module-connector",
      name: "HVAC Programmer Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-programmer-motor-connector",
      name: "HVAC Programmer Motor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-purge-relay",
      name: "HVAC Purge Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-recirculation-door-actuator",
      name: "HVAC Recirculation Door Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-refrigerant-temperature-sensor-connector",
      name: "HVAC Refrigerant Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-relay",
      name: "HVAC Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-relay-connector",
      name: "HVAC Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-resistor",
      name: "HVAC Resistor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-seat-filter",
      name: "HVAC Seat Filter",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-solenoid-connector",
      name: "HVAC Solenoid Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-switch-connector",
      name: "HVAC Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-control-bulb",
      name: "HVAC Temperature Control Bulb",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-control-panel",
      name: "HVAC Temperature Control Panel",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-control-switch",
      name: "HVAC Temperature Control Switch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-control-switch-connector",
      name: "HVAC Temperature Control Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-delay-relay",
      name: "HVAC Temperature Delay Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-delay-relay-harness-connector",
      name: "HVAC Temperature Delay Relay Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-relay-connector",
      name: "HVAC Temperature Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-sensor",
      name: "HVAC Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-sensor-connector",
      name: "HVAC Temperature Sensor Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-valve",
      name: "HVAC Temperature Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-valve-actuator",
      name: "HVAC Temperature Valve Actuator",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-temperature-valve-actuator-connector",
      name: "HVAC Temperature Valve Actuator Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-unit-case-bolt",
      name: "HVAC Unit Case Bolt",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-variable-speed-blower-controller-module-connector",
      name: "HVAC Variable Speed Blower Controller Module Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-vent-control-relay",
      name: "HVAC Vent Control Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-wiring-harness",
      name: "HVAC Wiring Harness",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-wiring-harness-connector",
      name: "HVAC Wiring Harness Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-wiring-relay",
      name: "HVAC Wiring Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hvac-wiring-relay-connector",
      name: "HVAC Wiring Relay Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "hybrid-drive-coolant-temperature-sensor",
      name: "Hybrid Drive Coolant Temperature Sensor",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "hydraulic-cooling-fan-solenoid-valve-connector",
      name: "Hydraulic Cooling Fan Solenoid Valve Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "hydraulic-filter",
      name: "Hydraulic Filter",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "idle-air-control-motor-connector",
      name: "Idle Air Control Motor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-air-control-valve",
      name: "Idle Air Control Valve",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-air-control-valve-connector",
      name: "Idle Air Control Valve Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-motor-connector",
      name: "Idle Speed Control Motor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-power-steering-pressure-switch",
      name: "Idle Speed Control Power Steering Pressure Switch",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-power-steering-pressure-switch-connector",
      name: "Idle Speed Control Power Steering Pressure Switch Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-relay",
      name: "Idle Speed Control Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-relay-connector",
      name: "Idle Speed Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "idle-speed-control-solenoid-connector",
      name: "Idle Speed Control Solenoid Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "idle-up-relay-solenoid",
      name: "Idle Up Relay Solenoid",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-accessory-relay",
      name: "Ignition Accessory Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-capacitor",
      name: "Ignition Capacitor",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-coil",
      name: "Ignition Coil",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-coil-connector",
      name: "Ignition Coil Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-coil-housing",
      name: "Ignition Coil Housing",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-coil-lead-wire",
      name: "Ignition Coil Lead Wire",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-coil-mounting-bracket",
      name: "Ignition Coil Mounting Bracket",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-condenser",
      name: "Ignition Condenser",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-contact-set",
      name: "Ignition Contact Set",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-control-module",
      name: "Ignition Control Module",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-control-module-bolt",
      name: "Ignition Control Module Bolt",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-control-module-connector",
      name: "Ignition Control Module Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-control-module-harness",
      name: "Ignition Control Module Harness",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-control-relay",
      name: "Ignition Control Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-conversion-kit",
      name: "Ignition Conversion Kit",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-distributor-seal",
      name: "Ignition Distributor Seal",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-feed-relay",
      name: "Ignition Feed Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-hall-effect-switch",
      name: "Ignition Hall Effect Switch",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-hall-effect-switch-connector",
      name: "Ignition Hall Effect Switch Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-igniter",
      name: "Ignition Igniter",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-knock-detonation-sensor",
      name: "Ignition Knock (Detonation) Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-knock-detonation-sensor-connector",
      name: "Ignition Knock (Detonation) Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-knock-detonation-sensor-harness",
      name: "Ignition Knock (Detonation) Sensor Harness",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-knock-sensor-module-connector",
      name: "Ignition Knock Sensor Module Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-light",
      name: "Ignition Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-light-bulb",
      name: "Ignition Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-lock-cylinder",
      name: "Ignition Lock Cylinder",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-lock-cylinder-and-switch",
      name: "Ignition Lock Cylinder and Switch",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-lock-cylinder-repair-kit",
      name: "Ignition Lock Cylinder Repair Kit",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-lock-key-door-lock-disable-relay",
      name: "Ignition Lock Key Door Lock Disable Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-lock-solenoid-connector",
      name: "Ignition Lock Solenoid Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-misfire-sensor-connector",
      name: "Ignition Misfire Sensor Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-pulsator-ring",
      name: "Ignition Pulsator Ring",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-relay",
      name: "Ignition Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-relay-connector",
      name: "Ignition Relay Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-start-relay",
      name: "Ignition Start Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-switch",
      name: "Ignition Switch",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-switch-actuator",
      name: "Ignition Switch Actuator",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-switch-connector",
      name: "Ignition Switch Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-switch-kit",
      name: "Ignition Switch Kit",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-switch-relay",
      name: "Ignition Switch Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-timing-adjuster-connector",
      name: "Ignition Timing Adjuster Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-warning-relay",
      name: "Ignition Warning Relay",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "ignition-warning-relay-connector",
      name: "Ignition Warning Relay Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "illuminated-entry-relay",
      name: "Illuminated Entry Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "illuminated-entry-switch-connector",
      name: "Illuminated Entry Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "illumination-relay",
      name: "Illumination Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "illumination-relay-connector",
      name: "Illumination Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "inertia-switch-connector",
      name: "Inertia Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "information-display-module-connector",
      name: "Information Display Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "inline-connector",
      name: "Inline Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-cluster",
      name: "Instrument Cluster",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-cluster-connector",
      name: "Instrument Cluster Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-cluster-voltage-regulator",
      name: "Instrument Cluster Voltage Regulator",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-light-connector",
      name: "Instrument Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-air-bag-module-connector",
      name: "Instrument Panel Air Bag Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-air-duct-air-temperature-sensor",
      name: "Instrument Panel Air Duct Air Temperature Sensor",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-alarm-connector",
      name: "Instrument Panel Alarm Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-cluster-relay",
      name: "Instrument Panel Cluster Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-cluster-relay-connector",
      name: "Instrument Panel Cluster Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-connector",
      name: "Instrument Panel Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-courtesy-light-bulb",
      name: "Instrument Panel Courtesy Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-dimmer-relay-connector",
      name: "Instrument Panel Dimmer Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-dimmer-switch",
      name: "Instrument Panel Dimmer Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-dimmer-switch-connector",
      name: "Instrument Panel Dimmer Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-harness-connector",
      name: "Instrument Panel Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-light-bulb",
      name: "Instrument Panel Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-light-dimmer-resistor-connector",
      name: "Instrument Panel Light Dimmer Resistor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-light-relay",
      name: "Instrument Panel Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-light-socket",
      name: "Instrument Panel Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-wiring-harness-relay",
      name: "Instrument Panel Wiring Harness Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-wiring-harness-relay-connector",
      name: "Instrument Panel Wiring Harness Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-wiring-harness-strap",
      name: "Instrument Panel Wiring Harness Strap",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "instrument-panel-wiring-junction-block-connector",
      name: "Instrument Panel Wiring Junction Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "intake-and-exhaust-manifolds-combination-gasket",
      name: "Intake and Exhaust Manifolds Combination Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "integrated-control-module",
      name: "Integrated Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler",
      name: "Intercooler",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-control-valve-solenoid-connector",
      name: "Intercooler Control Valve Solenoid Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-coolant-hose-cap",
      name: "Intercooler Coolant Hose Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-hose",
      name: "Intercooler Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-hose-kit",
      name: "Intercooler Hose Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-pump-motor-connector",
      name: "Intercooler Pump Motor Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "intercooler-pump-motor-relay",
      name: "Intercooler Pump Motor Relay",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-handle",
      name: "Interior Door Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-handle-bezel",
      name: "Interior Door Handle Bezel",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-light",
      name: "Interior Door Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-light-bulb",
      name: "Interior Door Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-light-bulb-socket",
      name: "Interior Door Light Bulb Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-door-pull-handle",
      name: "Interior Door Pull Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-grab-bar-bolt",
      name: "Interior Grab Bar Bolt",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-light-connector",
      name: "Interior Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-light-relay",
      name: "Interior Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-light-relay-connector",
      name: "Interior Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-light-switch",
      name: "Interior Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-light-switch-connector",
      name: "Interior Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-lighting-control-module-connector",
      name: "Interior Lighting Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-rear-view-mirror-connector",
      name: "Interior Rear View Mirror Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "interior-rear-view-mirror-switch-connector",
      name: "Interior Rear View Mirror Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "intermediate-axle-differential-locking-switch-connector",
      name: "Intermediate Axle Differential Locking Switch Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "jounce-bumper",
      name: "Jounce Bumper",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "junction-box-relay-connector",
      name: "Junction Box Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-antenna-connector",
      name: "Keyless Entry Antenna Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-kit",
      name: "Keyless Entry Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-module-connector",
      name: "Keyless Entry Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-receiver-connector",
      name: "Keyless Entry Receiver Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-relay",
      name: "Keyless Entry Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-relay-connector",
      name: "Keyless Entry Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-switch-connector",
      name: "Keyless Entry Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-transmitter",
      name: "Keyless Entry Transmitter",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-transmitter-battery",
      name: "Keyless Entry Transmitter Battery",
      categories: [
        {
          category_id: "accessories",
          category_name: "Accessories",
          position: 0,
        },
      ],
    },
    {
      id: "keyless-entry-transmitter-cover",
      name: "Keyless Entry Transmitter Cover",
      categories: [
        {
          category_id: "accessories",
          category_name: "Accessories",
          position: 0,
        },
      ],
    },
    {
      id: "lateral-accelerometer-connector",
      name: "Lateral Accelerometer Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "lateral-arm",
      name: "Lateral Arm",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "lateral-arm-and-ball-joint-assembly",
      name: "Lateral Arm and Ball Joint Assembly",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "lcd-relay",
      name: "LCD Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "lcd-relay-connector",
      name: "LCD Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-bumper",
      name: "Leaf Spring Bumper",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-bumper-spacer",
      name: "Leaf Spring Bumper Spacer",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-bushing",
      name: "Leaf Spring Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-hanger",
      name: "Leaf Spring Hanger",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-insulator",
      name: "Leaf Spring Insulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-plate",
      name: "Leaf Spring Plate",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-shackle",
      name: "Leaf Spring Shackle",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "leaf-spring-shackle-bushing",
      name: "Leaf Spring Shackle Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "license-plate-light-bulb",
      name: "License Plate Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "license-plate-light-connector",
      name: "License Plate Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "license-plate-light-lens",
      name: "License Plate Light Lens",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "license-plate-light-socket",
      name: "License Plate Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-actuator",
      name: "Liftgate Actuator",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-ajar-indicator-switch-connector",
      name: "Liftgate Ajar Indicator Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-control-module",
      name: "Liftgate Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-glass-actuator-connector",
      name: "Liftgate Glass Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-glass-ajar-switch",
      name: "Liftgate Glass Ajar Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-glass-hinge",
      name: "Liftgate Glass Hinge",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-glass-release-switch-connector",
      name: "Liftgate Glass Release Switch Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-actuator-relay",
      name: "Liftgate Latch Actuator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-handle",
      name: "Liftgate Latch Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-release-relay",
      name: "Liftgate Latch Release Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-release-relay-connector",
      name: "Liftgate Latch Release Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-release-switch",
      name: "Liftgate Latch Release Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-release-switch-connector",
      name: "Liftgate Latch Release Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-latch-release-switch-seal",
      name: "Liftgate Latch Release Switch Seal",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-lift-support",
      name: "Liftgate Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-light-socket",
      name: "Liftgate Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-lock-actuator",
      name: "Liftgate Lock Actuator",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-lock-actuator-connector",
      name: "Liftgate Lock Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-object-sensor-connector",
      name: "Liftgate Object Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-window-release-switch-connector",
      name: "Liftgate Window Release Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liftgate-wiring-harness-connector",
      name: "Liftgate Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "lighting-control-module-connector",
      name: "Lighting Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "liquid-propane-gas-lpg-relay",
      name: "Liquid Propane Gas (LPG) Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "load-leveler-relay",
      name: "Load Leveler Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "load-leveler-relay-connector",
      name: "Load Leveler Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "lock-system-module-connector",
      name: "Lock System Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "locking-hub",
      name: "Locking Hub",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "locking-hub-service-kit",
      name: "Locking Hub Service Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "longitudinal-accelerometer-connector",
      name: "Longitudinal Accelerometer Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "low-fuel-warning-relay",
      name: "Low Fuel Warning Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "low-fuel-warning-relay-connector",
      name: "Low Fuel Warning Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "luggage-compartment-light-bulb",
      name: "Luggage Compartment Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "main-relay",
      name: "Main Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "manifold-absolute-pressure-sensor",
      name: "Manifold Absolute Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "manifold-absolute-pressure-sensor-connector",
      name: "Manifold Absolute Pressure Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "manifold-differential-pressure-sensor",
      name: "Manifold Differential Pressure Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-adapter",
      name: "Manual Transmission Adapter",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-adapter-housing-seal",
      name: "Manual Transmission Adapter Housing Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-bearing",
      name: "Manual Transmission Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-block-out-relay-connector",
      name: "Manual Transmission Block Out Relay Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-chip-collector-magnet",
      name: "Manual Transmission Chip Collector Magnet",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-countershaft-bearing",
      name: "Manual Transmission Countershaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-countershaft-bearing-cone",
      name: "Manual Transmission Countershaft Bearing Cone",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-countershaft-race",
      name: "Manual Transmission Countershaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-countershaft-thrust-bearing",
      name: "Manual Transmission Countershaft Thrust Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-differential-bearing",
      name: "Manual Transmission Differential Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-differential-bearing-and-race-set",
      name: "Manual Transmission Differential Bearing and Race Set",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-differential-race",
      name: "Manual Transmission Differential Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-differential-repair-sleeve",
      name: "Manual Transmission Differential Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-differential-seal",
      name: "Manual Transmission Differential Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-drive-axle-seal",
      name: "Manual Transmission Drive Axle Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-drive-shaft-bearing",
      name: "Manual Transmission Drive Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-drive-shaft-seal",
      name: "Manual Transmission Drive Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-extension-housing-bearing",
      name: "Manual Transmission Extension Housing Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-extension-housing-race",
      name: "Manual Transmission Extension Housing Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-extension-housing-repair-sleeve",
      name: "Manual Transmission Extension Housing Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-extension-housing-seal",
      name: "Manual Transmission Extension Housing Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-fluid",
      name: "Manual Transmission Fluid",
      categories: [
        {
          category_id: "oil-fluids-and-chemicals",
          category_name: "Oil, Fluids and Chemicals",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-fluid-temperature-sensor-connector",
      name: "Manual Transmission Fluid Temperature Sensor Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-gear-bearing",
      name: "Manual Transmission Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-idler-bearing",
      name: "Manual Transmission Idler Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-input-shaft-bearing",
      name: "Manual Transmission Input Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-input-shaft-race",
      name: "Manual Transmission Input Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-input-shaft-repair-sleeve",
      name: "Manual Transmission Input Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-input-shaft-seal",
      name: "Manual Transmission Input Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-input-shaft-speed-sensor",
      name: "Manual Transmission Input Shaft Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-intermediate-shaft-bearing",
      name: "Manual Transmission Intermediate Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-intermediate-shaft-seal",
      name: "Manual Transmission Intermediate Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-bearing",
      name: "Manual Transmission Main Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-extension-seal",
      name: "Manual Transmission Main Shaft Extension Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-pilot-bearing",
      name: "Manual Transmission Main Shaft Pilot Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-pilot-seal",
      name: "Manual Transmission Main Shaft Pilot Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-race",
      name: "Manual Transmission Main Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-seal",
      name: "Manual Transmission Main Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-main-shaft-seal-kit",
      name: "Manual Transmission Main Shaft Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-manual-shaft-bearing",
      name: "Manual Transmission Manual Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-mount",
      name: "Manual Transmission Mount",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-mounting-bolt-kit",
      name: "Manual Transmission Mounting Bolt Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-oil-cooler-end-fitting",
      name: "Manual Transmission Oil Cooler End Fitting",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-oil-cooler-line",
      name: "Manual Transmission Oil Cooler Line",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-oil-pump-check-ball",
      name: "Manual Transmission Oil Pump Check Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-gear-bearing",
      name: "Manual Transmission Output Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-bearing",
      name: "Manual Transmission Output Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-race",
      name: "Manual Transmission Output Shaft Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-repair-sleeve",
      name: "Manual Transmission Output Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-seal",
      name: "Manual Transmission Output Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-seal-and-bushing-kit",
      name: "Manual Transmission Output Shaft Seal and Bushing Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-seal-kit",
      name: "Manual Transmission Output Shaft Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-output-shaft-speed-sensor",
      name: "Manual Transmission Output Shaft Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-overdrive-manual-shaft-seal",
      name: "Manual Transmission Overdrive Manual Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-overdrive-output-shaft-bearing",
      name: "Manual Transmission Overdrive Output Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-overdrive-output-shaft-seal",
      name: "Manual Transmission Overdrive Output Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-overdrive-solenoid-seal",
      name: "Manual Transmission Overdrive Solenoid Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-overdrive-switch-relay",
      name: "Manual Transmission Overdrive Switch Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-pinion-bearing",
      name: "Manual Transmission Pinion Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-pinion-race",
      name: "Manual Transmission Pinion Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-pinion-seal",
      name: "Manual Transmission Pinion Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-race",
      name: "Manual Transmission Race",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-rebuild-kit",
      name: "Manual Transmission Rebuild Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-relay-shaft-bushing",
      name: "Manual Transmission Relay Shaft Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-remote-control-seal",
      name: "Manual Transmission Remote Control Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-repair-sleeve",
      name: "Manual Transmission Repair Sleeve",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-reverse-idler-gear-bearing",
      name: "Manual Transmission Reverse Idler Gear Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-seal",
      name: "Manual Transmission Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-seal-kit",
      name: "Manual Transmission Seal Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-boot-retainer-hardware-kit",
      name: "Manual Transmission Shift Boot Retainer Hardware Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-cable",
      name: "Manual Transmission Shift Cable",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-cable-bushing",
      name: "Manual Transmission Shift Cable Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-detent-ball",
      name: "Manual Transmission Shift Detent Ball",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-knob",
      name: "Manual Transmission Shift Knob",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-lever-bushing",
      name: "Manual Transmission Shift Lever Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-position-switch-connector",
      name: "Manual Transmission Shift Position Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-rod-bushing",
      name: "Manual Transmission Shift Rod Bushing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-shaft-bearing",
      name: "Manual Transmission Shift Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shift-shaft-seal",
      name: "Manual Transmission Shift Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-shifter-repair-kit",
      name: "Manual Transmission Shifter Repair Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-speed-sensor",
      name: "Manual Transmission Speed Sensor",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-transfer-shaft-bearing",
      name: "Manual Transmission Transfer Shaft Bearing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-transfer-shaft-seal",
      name: "Manual Transmission Transfer Shaft Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-upshift-relay",
      name: "Manual Transmission Upshift Relay",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "manual-transmission-upshift-relay-connector",
      name: "Manual Transmission Upshift Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "map-light-bulb",
      name: "Map Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "marker-light-connector",
      name: "Marker Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor",
      name: "Mass Air Flow Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor-assembly",
      name: "Mass Air Flow Sensor Assembly",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor-connector",
      name: "Mass Air Flow Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor-mount",
      name: "Mass Air Flow Sensor Mount",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor-relay",
      name: "Mass Air Flow Sensor Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "mass-air-flow-sensor-relay-connector",
      name: "Mass Air Flow Sensor Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "mechanical-fuel-pump",
      name: "Mechanical Fuel Pump",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "message-center-switch-connector",
      name: "Message Center Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "micro-plug-relay",
      name: "Micro Plug Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "micro-plug-relay-connector",
      name: "Micro Plug Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-antenna",
      name: "Mobile Phone Antenna",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-antenna-bolt",
      name: "Mobile Phone Antenna Bolt",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-antenna-connector",
      name: "Mobile Phone Antenna Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-antenna-mast",
      name: "Mobile Phone Antenna Mast",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-connector",
      name: "Mobile Phone Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-control-module-bolt",
      name: "Mobile Phone Control Module Bolt",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-microphone-connector",
      name: "Mobile Phone Microphone Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "mobile-phone-transceiver-connector",
      name: "Mobile Phone Transceiver Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "multi-function-module",
      name: "Multi-Function Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-function-switch",
      name: "Multi-Function Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-alarm-connector",
      name: "Multi-Purpose Alarm Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-alarm-module-connector",
      name: "Multi-Purpose Alarm Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-clip",
      name: "Multi-Purpose Clip",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-electrical-connector",
      name: "Multi-Purpose Electrical Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-electrical-connector-kit",
      name: "Multi-Purpose Electrical Connector Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-fuse",
      name: "Multi-Purpose Fuse",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-light-bulb",
      name: "Multi-Purpose Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-magnet-set",
      name: "Multi-Purpose Magnet Set",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-o-ring",
      name: "Multi-Purpose O-Ring",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-relay",
      name: "Multi-Purpose Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-relay-connector",
      name: "Multi-Purpose Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-retainer",
      name: "Multi-Purpose Retainer",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-seal",
      name: "Multi-Purpose Seal",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-wire-connector",
      name: "Multi-Purpose Wire Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "multi-purpose-wiring-harness-connector",
      name: "Multi-Purpose Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "neutral-safety-switch",
      name: "Neutral Safety Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "neutral-safety-switch-connector",
      name: "Neutral Safety Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "neutral-safety-switch-relay",
      name: "Neutral Safety Switch Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "neutral-safety-switch-relay-connector",
      name: "Neutral Safety Switch Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "night-vision-camera-connector",
      name: "Night Vision Camera Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "nitrogen-oxide-nox-sensor",
      name: "Nitrogen Oxide (NOx) Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "nitrogen-oxide-nox-sensor-connector",
      name: "Nitrogen Oxide (NOx) Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "object-sensor-wiring-harness-connector",
      name: "Object Sensor Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "odometer-drive-gear",
      name: "Odometer Drive Gear",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "off-road-light-connector",
      name: "Off-Road Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "off-road-light-relay",
      name: "Off-Road Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "off-road-light-relay-connector",
      name: "Off-Road Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oil-pressure-fuel-pump-cut-off-switch-connector",
      name: "Oil Pressure Fuel Pump Cut-Off Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oil-pressure-switch-connector",
      name: "Oil Pressure Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oil-reservoir-gasket",
      name: "Oil Reservoir Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "oil-sending-unit-switch-connector",
      name: "Oil Sending Unit Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "on-board-computer-relay",
      name: "On-Board Computer Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "opera-light-socket",
      name: "Opera Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "overdrive-relay",
      name: "Overdrive Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "overdrive-relay-connector",
      name: "Overdrive Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "overhead-console",
      name: "Overhead Console",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "overhead-console-light-bulb",
      name: "Overhead Console Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "overload-protection-relay",
      name: "Overload Protection Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "overload-protection-relay-connector",
      name: "Overload Protection Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor",
      name: "Oxygen Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-cable-clip",
      name: "Oxygen Sensor Cable Clip",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-connector",
      name: "Oxygen Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-gasket",
      name: "Oxygen Sensor Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-heater-relay-connector",
      name: "Oxygen Sensor Heater Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-relay",
      name: "Oxygen Sensor Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-relay-connector",
      name: "Oxygen Sensor Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-wire-guide",
      name: "Oxygen Sensor Wire Guide",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "oxygen-sensor-wiring-harness",
      name: "Oxygen Sensor Wiring Harness",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "park-neutral-position-switch",
      name: "Park / Neutral Position Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "park-neutral-position-switch-connector",
      name: "Park / Neutral Position Switch Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "park-neutral-position-switch-relay-connector",
      name: "Park / Neutral Position Switch Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "park-assist-camera",
      name: "Park Assist Camera",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "park-assist-camera-connector",
      name: "Park Assist Camera Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-cornering-light-assembly",
      name: "Parking / Cornering Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-neutral-position-and-back-up-light-switch",
      name: "Parking / Neutral Position and Back Up Light Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-neutral-position-and-back-up-light-switch-connector",
      name: "Parking / Neutral Position and Back Up Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-side-marker-light",
      name: "Parking / Side Marker Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-side-marker-light-assembly",
      name: "Parking / Side Marker Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-turn-signal-stop-light-connector",
      name: "Parking / Turn Signal / Stop Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-aid-control-module-connector",
      name: "Parking Aid Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-aid-indicator-light-connector",
      name: "Parking Aid Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-aid-sensor",
      name: "Parking Aid Sensor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-aid-sensor-connector",
      name: "Parking Aid Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-actuator-gear-kit",
      name: "Parking Brake Actuator Gear Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-actuator-harness-connector",
      name: "Parking Brake Actuator Harness Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-actuator-o-ring",
      name: "Parking Brake Actuator O-Ring",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-adjuster",
      name: "Parking Brake Adjuster",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-bell-crank",
      name: "Parking Brake Bell Crank",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-cable",
      name: "Parking Brake Cable",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-control-module",
      name: "Parking Brake Control Module",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-control-module-connector",
      name: "Parking Brake Control Module Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-disc-brake-pad-set",
      name: "Parking Brake Disc Brake Pad Set",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-electronic-control-unit",
      name: "Parking Brake Electronic Control Unit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-handle-assembly",
      name: "Parking Brake Handle Assembly",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-hardware-kit",
      name: "Parking Brake Hardware Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-indicator-light",
      name: "Parking Brake Indicator Light",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-indicator-light-bulb",
      name: "Parking Brake Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-lever-boot",
      name: "Parking Brake Lever Boot",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-lever-kit",
      name: "Parking Brake Lever Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pedal-pad",
      name: "Parking Brake Pedal Pad",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pedal-release-cable",
      name: "Parking Brake Pedal Release Cable",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pedal-release-handle",
      name: "Parking Brake Pedal Release Handle",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pump-motor-connector",
      name: "Parking Brake Pump Motor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pump-motor-switch",
      name: "Parking Brake Pump Motor Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-pump-relay-connector",
      name: "Parking Brake Pump Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-relay-connector",
      name: "Parking Brake Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-release-relay",
      name: "Parking Brake Release Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-shoe",
      name: "Parking Brake Shoe",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-shoe-hardware-kit",
      name: "Parking Brake Shoe Hardware Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-shoe-hold-down-spring-kit",
      name: "Parking Brake Shoe Hold Down Spring Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-shoe-set",
      name: "Parking Brake Shoe Set",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-shoe-spring-kit",
      name: "Parking Brake Shoe Spring Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-solenoid-connector",
      name: "Parking Brake Solenoid Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-strut",
      name: "Parking Brake Strut",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-switch",
      name: "Parking Brake Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-switch-connector",
      name: "Parking Brake Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-brake-warning-relay",
      name: "Parking Brake Warning Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light",
      name: "Parking Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-assembly",
      name: "Parking Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-bulb",
      name: "Parking Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-bulb-socket",
      name: "Parking Light Bulb Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-connector",
      name: "Parking Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-relay",
      name: "Parking Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-relay-connector",
      name: "Parking Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "parking-light-switch-connector",
      name: "Parking Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "passive-restraints-relay",
      name: "Passive Restraints Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "passive-restraints-relay-connector",
      name: "Passive Restraints Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve",
      name: "PCV Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-connector",
      name: "PCV Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-cover",
      name: "PCV Valve Cover",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-diaphragm",
      name: "PCV Valve Diaphragm",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-elbow",
      name: "PCV Valve Elbow",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-grommet",
      name: "PCV Valve Grommet",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-heater-connector",
      name: "PCV Valve Heater Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-hose",
      name: "PCV Valve Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-oil-trap",
      name: "PCV Valve Oil Trap",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pcv-valve-tubing",
      name: "PCV Valve Tubing",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "pedestrian-impact-detection-sensor-connector",
      name: "Pedestrian Impact Detection Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "ported-vacuum-switch",
      name: "Ported Vacuum Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "position-light-connector",
      name: "Position Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "positive-battery-junction-block-cable",
      name: "Positive Battery Junction Block Cable",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-antenna-module-connector",
      name: "Power Antenna Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-antenna-motor-connector",
      name: "Power Antenna Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-antenna-relay",
      name: "Power Antenna Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-antenna-relay-connector",
      name: "Power Antenna Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-antenna-wiring-harness-connector",
      name: "Power Antenna Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster",
      name: "Power Brake Booster",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-check-valve",
      name: "Power Brake Booster Check Valve",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-connector",
      name: "Power Brake Booster Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-fluid-flow-alarm-connector",
      name: "Power Brake Booster Fluid Flow Alarm Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-hydraulic-motor-pump",
      name: "Power Brake Booster Hydraulic Motor Pump",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-indicator-connector",
      name: "Power Brake Booster Indicator Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-line",
      name: "Power Brake Booster Line",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-motor-connector",
      name: "Power Brake Booster Motor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-pressure-sensor-connector",
      name: "Power Brake Booster Pressure Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-pump-connector",
      name: "Power Brake Booster Pump Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-pump-relay-connector",
      name: "Power Brake Booster Pump Relay Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-sensor-connector",
      name: "Power Brake Booster Sensor Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-switch",
      name: "Power Brake Booster Switch",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-switch-connector",
      name: "Power Brake Booster Switch Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-vacuum-pump",
      name: "Power Brake Booster Vacuum Pump",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-booster-vacuum-sensor",
      name: "Power Brake Booster Vacuum Sensor",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-brake-relay",
      name: "Power Brake Relay",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "power-distribution-block-connector",
      name: "Power Distribution Block Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-feed-harness-connector",
      name: "Power Feed Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-folding-seat-switch-connector",
      name: "Power Folding Seat Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-inverter-connector",
      name: "Power Inverter Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-mirror-switch-connector",
      name: "Power Mirror Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-connector",
      name: "Power Seat Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-control-module-connector",
      name: "Power Seat Control Module Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-horizontal-adjuster-motor-connector",
      name: "Power Seat Horizontal Adjuster Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-motor-connector",
      name: "Power Seat Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-switch",
      name: "Power Seat Switch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-switch-connector",
      name: "Power Seat Switch Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-track-motor-connector",
      name: "Power Seat Track Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-track-repair-kit",
      name: "Power Seat Track Repair Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-vertical-adjuster-motor-connector",
      name: "Power Seat Vertical Adjuster Motor Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-seat-wiring-harness-clip",
      name: "Power Seat Wiring Harness Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-sliding-door-cable",
      name: "Power Sliding Door Cable",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-sliding-door-module-connector",
      name: "Power Sliding Door Module Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-assist-motor-connector",
      name: "Power Steering Assist Motor Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-assist-motor-coupling-gear",
      name: "Power Steering Assist Motor Coupling Gear",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-control-module-connector",
      name: "Power Steering Control Module Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-cooler",
      name: "Power Steering Cooler",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-cooler-bracket",
      name: "Power Steering Cooler Bracket",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-cooler-line",
      name: "Power Steering Cooler Line",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-cylinder-line-hose-assembly",
      name: "Power Steering Cylinder Line Hose Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-filter",
      name: "Power Steering Filter",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-hose-assembly",
      name: "Power Steering Hose Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-power-cylinder-boot-kit",
      name: "Power Steering Power Cylinder Boot Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-control-solenoid-connector",
      name: "Power Steering Pressure Control Solenoid Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-hose",
      name: "Power Steering Pressure Hose",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-hose-seal-ring",
      name: "Power Steering Pressure Hose Seal Ring",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-line-hose-assembly",
      name: "Power Steering Pressure Line Hose Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-sensor",
      name: "Power Steering Pressure Sensor",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-sensor-connector",
      name: "Power Steering Pressure Sensor Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-switch",
      name: "Power Steering Pressure Switch",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pressure-switch-connector",
      name: "Power Steering Pressure Switch Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump",
      name: "Power Steering Pump",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-and-gear-assembly",
      name: "Power Steering Pump and Gear Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-fan",
      name: "Power Steering Pump Fan",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-pulley",
      name: "Power Steering Pump Pulley",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-seal-kit",
      name: "Power Steering Pump Seal Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-shaft-bearing",
      name: "Power Steering Pump Shaft Bearing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-shaft-seal",
      name: "Power Steering Pump Shaft Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-pump-washer",
      name: "Power Steering Pump Washer",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-relay",
      name: "Power Steering Relay",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-relay-connector",
      name: "Power Steering Relay Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-reservoir",
      name: "Power Steering Reservoir",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-reservoir-cap",
      name: "Power Steering Reservoir Cap",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-reservoir-hose",
      name: "Power Steering Reservoir Hose",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-return-hose",
      name: "Power Steering Return Hose",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-return-line-end-fitting",
      name: "Power Steering Return Line End Fitting",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-return-line-hose-assembly",
      name: "Power Steering Return Line Hose Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-steering-valve-cover-seal",
      name: "Power Steering Valve Cover Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "power-supply-module",
      name: "Power Supply Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-tailgate-relay-connector",
      name: "Power Tailgate Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-tailgate-window-switch",
      name: "Power Tailgate Window Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-connector",
      name: "Power Take Off (PTO) Connector",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-countershaft-bearing",
      name: "Power Take Off (PTO) Countershaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-countershaft-seal",
      name: "Power Take Off (PTO) Countershaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-input-shaft-bearing",
      name: "Power Take Off (PTO) Input Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-input-shaft-seal",
      name: "Power Take Off (PTO) Input Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-output-shaft-bearing",
      name: "Power Take Off (PTO) Output Shaft Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-output-shaft-race",
      name: "Power Take Off (PTO) Output Shaft Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-output-shaft-seal",
      name: "Power Take Off (PTO) Output Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-reverse-idler-race",
      name: "Power Take Off (PTO) Reverse Idler Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-shaft-seal",
      name: "Power Take Off (PTO) Shaft Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-take-off-pto-switch-relay",
      name: "Power Take Off (PTO) Switch Relay",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "power-window-control-module-connector",
      name: "Power Window Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-window-relay",
      name: "Power Window Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-window-relay-connector",
      name: "Power Window Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "power-window-switch-connector",
      name: "Power Window Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "powertrain-control-module-pcm",
      name: "Powertrain Control Module (PCM)",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "powertrain-control-module-pcm-connector",
      name: "Powertrain Control Module (PCM) Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "powertrain-control-module-pcm-relay",
      name: "Powertrain Control Module (PCM) Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "powertrain-control-module-pcm-relay-connector",
      name: "Powertrain Control Module (PCM) Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "puddle-light",
      name: "Puddle Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "pulse-vacuum-hub-solenoid-connector",
      name: "Pulse Vacuum Hub Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "pulse-wiper-relay",
      name: "Pulse Wiper Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "pump-delivery-valve-wiring-connector",
      name: "Pump Delivery Valve Wiring Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "purge-flow-sensor-connector",
      name: "Purge Flow Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "push-to-start-ignition-switch-button",
      name: "Push To Start Ignition Switch Button",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "quick-disconnect-tool",
      name: "Quick Disconnect Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-assembly",
      name: "Rack and Pinion Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-bellows",
      name: "Rack and Pinion Bellows",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-bellows-kit",
      name: "Rack and Pinion Bellows Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-bushing",
      name: "Rack and Pinion Bushing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-mount-bushing",
      name: "Rack and Pinion Mount Bushing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-pinion-seal-kit",
      name: "Rack and Pinion Seal Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "rack-and-sector-gear-kit",
      name: "Rack and Sector Gear Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "radiator",
      name: "Radiator",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-cap",
      name: "Radiator Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-cap-adapter",
      name: "Radiator Cap Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-cap-tester-adapter",
      name: "Radiator Cap Tester Adapter",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-coolant-hose",
      name: "Radiator Coolant Hose",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-coolant-hose-clip",
      name: "Radiator Coolant Hose Clip",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-coolant-hose-connector",
      name: "Radiator Coolant Hose Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-coolant-hose-flange",
      name: "Radiator Coolant Hose Flange",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-coolant-hose-kit",
      name: "Radiator Coolant Hose Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-drain-petcock",
      name: "Radiator Drain Petcock",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-hose-inlet-extension",
      name: "Radiator Hose Inlet Extension",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-mount-bushing",
      name: "Radiator Mount Bushing",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-pipe-o-ring",
      name: "Radiator Pipe O-Ring",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-shutter-assembly",
      name: "Radiator Shutter Assembly",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-shutter-wiring-harness-connector",
      name: "Radiator Shutter Wiring Harness Connector",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radiator-surge-tank-cap",
      name: "Radiator Surge Tank Cap",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "radio-amplifier-connector",
      name: "Radio Amplifier Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-antenna-bolt",
      name: "Radio Antenna Bolt",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-antenna-connector",
      name: "Radio Antenna Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-antenna-mast",
      name: "Radio Antenna Mast",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-antenna-module-connector",
      name: "Radio Antenna Module Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-audio-signal-control-unit-processor-connector",
      name: "Radio Audio Signal Control Unit Processor Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-bracket-bolt",
      name: "Radio Bracket Bolt",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-capacitor",
      name: "Radio Capacitor",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-connector",
      name: "Radio Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-control-interior-noise-microphone-connector",
      name: "Radio Control Interior Noise Microphone Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-control-module-connector",
      name: "Radio Control Module Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-control-relay-connector",
      name: "Radio Control Relay Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-dial-light",
      name: "Radio Dial Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "radio-display-light-bulb",
      name: "Radio Display Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "radio-knob",
      name: "Radio Knob",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-module-interface-connector",
      name: "Radio Module Interface Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "radio-power-connector",
      name: "Radio Power Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-rear-audio-control-connector",
      name: "Radio Rear Audio Control Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-speaker-connector",
      name: "Radio Speaker Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-wiring-relay",
      name: "Radio Wiring Relay",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radio-wiring-relay-connector",
      name: "Radio Wiring Relay Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm",
      name: "Radius Arm",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-bracket",
      name: "Radius Arm Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-bushing",
      name: "Radius Arm Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-bushing-kit",
      name: "Radius Arm Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-hardware-kit",
      name: "Radius Arm Hardware Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-heat-shield",
      name: "Radius Arm Heat Shield",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-insulator",
      name: "Radius Arm Insulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "radius-arm-mount",
      name: "Radius Arm Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "reading-light-bulb",
      name: "Reading Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "reading-light-connector",
      name: "Reading Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "rear-body-harness-connector",
      name: "Rear Body Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "rear-heater-coolant-shut-off-solenoid-connector",
      name: "Rear Heater Coolant Shut-Off Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "rear-light-harness-connector",
      name: "Rear Light Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "rear-panel-applique",
      name: "Rear Panel Applique",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "rear-window-emergency-light-connector",
      name: "Rear Window Emergency Light Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "rear-window-washer-fluid-pump-motor-connector",
      name: "Rear Window Washer Fluid Pump Motor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "rear-window-wiper-and-washer-switch-connector",
      name: "Rear Window Wiper and Washer Switch Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "rear-window-wiper-motor-connector",
      name: "Rear Window Wiper Motor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "rear-window-wiper-relay",
      name: "Rear Window Wiper Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "reflector-assembly",
      name: "Reflector Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "reflector-housing",
      name: "Reflector Housing",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "refrigerant-containment-switch-connector",
      name: "Refrigerant Containment Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "relay-box-temperature-switch-connector",
      name: "Relay Box Temperature Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "relay-connector",
      name: "Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "relay-control-module",
      name: "Relay Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "relay-control-module-connector",
      name: "Relay Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "remote-control-door-lock-receiver-antenna-connector",
      name: "Remote Control Door Lock Receiver Antenna Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "remote-control-door-lock-receiver-connector",
      name: "Remote Control Door Lock Receiver Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "repair-harness",
      name: "Repair Harness",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "repair-sleeve-tool",
      name: "Repair Sleeve Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "roof-accessory-harness-connector",
      name: "Roof Accessory Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-clearance-light-socket",
      name: "Roof Clearance Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-light-relay-connector",
      name: "Roof Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-marker-light",
      name: "Roof Marker Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-marker-light-bulb",
      name: "Roof Marker Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-marker-light-connector",
      name: "Roof Marker Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-marker-light-switch-connector",
      name: "Roof Marker Light Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "roof-side-rail-air-bag-module-connector",
      name: "Roof Side Rail Air Bag Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "rotary-tool",
      name: "Rotary Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "rotary-tool-bit",
      name: "Rotary Tool Bit",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "running-board-light-connector",
      name: "Running Board Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "running-board-light-socket",
      name: "Running Board Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "running-board-motor-connector",
      name: "Running Board Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "running-light-bulb",
      name: "Running Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "schrader-valve",
      name: "Schrader Valve",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "seat-adjuster-control-relay-connector",
      name: "Seat Adjuster Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-adjustment-cable-guide",
      name: "Seat Adjustment Cable Guide",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-adjustment-gear",
      name: "Seat Adjustment Gear",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-adjustment-strut",
      name: "Seat Adjustment Strut",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-back-relay-connector",
      name: "Seat Back Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-buckle-button-stop",
      name: "Seat Belt Buckle Button Stop",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-harness-connector",
      name: "Seat Belt Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-indicator-light-connector",
      name: "Seat Belt Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-pretensioner-actuator-connector",
      name: "Seat Belt Pretensioner Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-pretensioner-bolt",
      name: "Seat Belt Pretensioner Bolt",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-pretensioner-connector",
      name: "Seat Belt Pretensioner Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-pretensioner-wiring-harness-connector",
      name: "Seat Belt Pretensioner Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-retractor-connector",
      name: "Seat Belt Retractor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-retractor-release-solenoid-connector",
      name: "Seat Belt Retractor Release Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-switch-connector",
      name: "Seat Belt Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-chime-module-connector",
      name: "Seat Belt Warning Chime Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-light",
      name: "Seat Belt Warning Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-light-bulb",
      name: "Seat Belt Warning Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-relay",
      name: "Seat Belt Warning Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-relay-connector",
      name: "Seat Belt Warning Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-belt-warning-sensor",
      name: "Seat Belt Warning Sensor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-heater-harness-connector",
      name: "Seat Heater Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-heater-pad-connector",
      name: "Seat Heater Pad Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-heater-switch-connector",
      name: "Seat Heater Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-inflation-pump-motor-connector",
      name: "Seat Inflation Pump Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-inflator-switch-connector",
      name: "Seat Inflator Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-lumbar-motor-connector",
      name: "Seat Lumbar Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-lumbar-position-sensor-connector",
      name: "Seat Lumbar Position Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-lumbar-pump-connector",
      name: "Seat Lumbar Pump Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-lumbar-switch-connector",
      name: "Seat Lumbar Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-memory-module-connector",
      name: "Seat Memory Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-memory-position-sensor-connector",
      name: "Seat Memory Position Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-memory-switch-connector",
      name: "Seat Memory Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-motor",
      name: "Seat Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-recline-motor-connector",
      name: "Seat Recline Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-recline-position-sensor-connector",
      name: "Seat Recline Position Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-recline-switch-connector",
      name: "Seat Recline Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-relay",
      name: "Seat Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-relay-connector",
      name: "Seat Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "seat-storage-lever-repair-kit",
      name: "Seat Storage Lever Repair Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-switch",
      name: "Seat Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-switch-panel",
      name: "Seat Switch Panel",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-track-cover",
      name: "Seat Track Cover",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "seat-track-position-sensor-connector",
      name: "Seat Track Position Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-bleeder-valve-solenoid-connector",
      name: "Secondary Air Injection Bleeder Valve Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-bypass-valve",
      name: "Secondary Air Injection Bypass Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-bypass-valve-solenoid-connector",
      name: "Secondary Air Injection Bypass Valve Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-check-valve",
      name: "Secondary Air Injection Check Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-check-valve-solenoid-connector",
      name: "Secondary Air Injection Check Valve Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-control-module-connector",
      name: "Secondary Air Injection Control Module Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-control-valve",
      name: "Secondary Air Injection Control Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pipe-connector",
      name: "Secondary Air Injection Pipe Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump",
      name: "Secondary Air Injection Pump",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-bearing",
      name: "Secondary Air Injection Pump Bearing",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-check-valve",
      name: "Secondary Air Injection Pump Check Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-connector",
      name: "Secondary Air Injection Pump Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-mount",
      name: "Secondary Air Injection Pump Mount",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-pulley",
      name: "Secondary Air Injection Pump Pulley",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-relay",
      name: "Secondary Air Injection Pump Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-relay-connector",
      name: "Secondary Air Injection Pump Relay Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-pump-solenoid-valve",
      name: "Secondary Air Injection Pump Solenoid Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-relay",
      name: "Secondary Air Injection Relay",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-relay-connector",
      name: "Secondary Air Injection Relay Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-shut-off-valve-connector",
      name: "Secondary Air Injection Shut-Off Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-shut-off-valve-sensor-connector",
      name: "Secondary Air Injection Shut-Off Valve Sensor Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-solenoid",
      name: "Secondary Air Injection Solenoid",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "secondary-air-injection-solenoid-connector",
      name: "Secondary Air Injection Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "serpentine-belt",
      name: "Serpentine Belt",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "serpentine-belt-drive-component-kit",
      name: "Serpentine Belt Drive Component Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "serpentine-belt-drive-conversion-kit",
      name: "Serpentine Belt Drive Conversion Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "serpentine-belt-drive-enhancement-kit",
      name: "Serpentine Belt Drive Enhancement Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "serpentine-belt-drive-solution-kit",
      name: "Serpentine Belt Drive Solution Kit",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-actuator",
      name: "Shift Interlock Actuator",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-control-module-connector",
      name: "Shift Interlock Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-latch",
      name: "Shift Interlock Latch",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-relay",
      name: "Shift Interlock Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-solenoid",
      name: "Shift Interlock Solenoid",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "shift-interlock-solenoid-connector",
      name: "Shift Interlock Solenoid Connector",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "shift-park-release-link",
      name: "Shift Park Release Link",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "shift-solenoid-connector",
      name: "Shift Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "shoulder-belt-guide-motor-connector",
      name: "Shoulder Belt Guide Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-air-bag-seat-module-connector",
      name: "Side Air Bag Seat Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-air-bag-sensor-connector",
      name: "Side Air Bag Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light",
      name: "Side Marker Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-assembly",
      name: "Side Marker Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-bulb",
      name: "Side Marker Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-connector",
      name: "Side Marker Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-relay-connector",
      name: "Side Marker Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-socket",
      name: "Side Marker Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-light-socket-connector",
      name: "Side Marker Light Socket Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-marker-relay",
      name: "Side Marker Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-mirror-signal-light-bulb",
      name: "Side Mirror Signal Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-object-sensor-connector",
      name: "Side Object Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-repeater-light",
      name: "Side Repeater Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "side-repeater-light-assembly",
      name: "Side Repeater Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "single-lead-spark-coil-wire",
      name: "Single Lead Spark Coil Wire",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "single-lead-spark-plug-wire",
      name: "Single Lead Spark Plug Wire",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "siren-relay-connector",
      name: "Siren Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "skid-plate-retainer",
      name: "Skid Plate Retainer",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sliding-door-contact-switch-connector",
      name: "Sliding Door Contact Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sliding-door-lock-actuator",
      name: "Sliding Door Lock Actuator",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sliding-door-lock-actuator-connector",
      name: "Sliding Door Lock Actuator Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sliding-door-motor-harness",
      name: "Sliding Door Motor Harness",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "socket",
      name: "Socket",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "socket-assembly",
      name: "Socket Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "spare-tire-jack-handle-wheel-lug-wrench",
      name: "Spare Tire Jack Handle / Wheel Lug Wrench",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug",
      name: "Spark Plug",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-boot",
      name: "Spark Plug Boot",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-connector",
      name: "Spark Plug Connector",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-gasket",
      name: "Spark Plug Gasket",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-heat-shield",
      name: "Spark Plug Heat Shield",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-non-fouler",
      name: "Spark Plug Non-Fouler",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-thread-repair-kit",
      name: "Spark Plug Thread Repair Kit",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-tube-seal",
      name: "Spark Plug Tube Seal",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-tube-seal-set",
      name: "Spark Plug Tube Seal Set",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-wire",
      name: "Spark Plug Wire",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-wire-holder",
      name: "Spark Plug Wire Holder",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-wire-retaining-ring",
      name: "Spark Plug Wire Retaining Ring",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "spark-plug-wire-set",
      name: "Spark Plug Wire Set",
      categories: [
        {
          category_id: "ignition",
          category_name: "Ignition",
          position: 0,
        },
      ],
    },
    {
      id: "speaker",
      name: "Speaker",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "speaker-connector",
      name: "Speaker Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "speaker-relay",
      name: "Speaker Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "speaker-relay-connector",
      name: "Speaker Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "speedometer-cable",
      name: "Speedometer Cable",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "speedometer-cable-clip",
      name: "Speedometer Cable Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "speedometer-driven-gear-seal",
      name: "Speedometer Driven Gear Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "spindle-lock-nut-kit",
      name: "Spindle Lock Nut Kit",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "spindle-nut",
      name: "Spindle Nut",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "spindle-stub-shaft",
      name: "Spindle Stub Shaft",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "starter-brush",
      name: "Starter Brush",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-brush-set",
      name: "Starter Brush Set",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-cable",
      name: "Starter Cable",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-clutch-internal-switch",
      name: "Starter Clutch Internal Switch",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-cut-off-relay",
      name: "Starter Cut-Off Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-cut-off-relay-connector",
      name: "Starter Cut-Off Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-drive",
      name: "Starter Drive",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-motor",
      name: "Starter Motor",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-motor-control-relay",
      name: "Starter Motor Control Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-motor-control-relay-connector",
      name: "Starter Motor Control Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-motor-relay-connector",
      name: "Starter Motor Relay Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-motor-repair-kit",
      name: "Starter Motor Repair Kit",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-relay",
      name: "Starter Relay",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-solenoid",
      name: "Starter Solenoid",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-solenoid-connector",
      name: "Starter Solenoid Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-solenoid-switch",
      name: "Starter Solenoid Switch",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "starter-solenoid-wiring-harness-connector",
      name: "Starter Solenoid Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "steering-angle-sensor-connector",
      name: "Steering Angle Sensor Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-center-link",
      name: "Steering Center Link",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-column-bushing",
      name: "Steering Column Bushing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-column-connector",
      name: "Steering Column Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-column-housing-repair-kit",
      name: "Steering Column Housing Repair Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-column-lock-actuator",
      name: "Steering Column Lock Actuator",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-column-wiring-harness-connector",
      name: "Steering Column Wiring Harness Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-coupling-assembly",
      name: "Steering Coupling Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-damper",
      name: "Steering Damper",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-damper-kit",
      name: "Steering Damper Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-drag-link",
      name: "Steering Drag Link",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-drag-link-adjusting-sleeve",
      name: "Steering Drag Link Adjusting Sleeve",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear",
      name: "Steering Gear",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-housing-seal",
      name: "Steering Gear Housing Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-input-shaft-seal-kit",
      name: "Steering Gear Input Shaft Seal Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-pinion-shaft-bearing",
      name: "Steering Gear Pinion Shaft Bearing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-pitman-shaft-seal",
      name: "Steering Gear Pitman Shaft Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-seal-kit",
      name: "Steering Gear Seal Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-sector-shaft-seal",
      name: "Steering Gear Sector Shaft Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-worm-shaft-bearing",
      name: "Steering Gear Worm Shaft Bearing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-gear-worm-shaft-seal",
      name: "Steering Gear Worm Shaft Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm",
      name: "Steering Idler Arm",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm-and-bracket-assembly",
      name: "Steering Idler Arm and Bracket Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm-bracket",
      name: "Steering Idler Arm Bracket",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm-bushing",
      name: "Steering Idler Arm Bushing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm-bushing-kit",
      name: "Steering Idler Arm Bushing Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-idler-arm-grease-hose-kit",
      name: "Steering Idler Arm Grease Hose Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-king-pin-repair-kit",
      name: "Steering King Pin Repair Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "steering-king-pin-set",
      name: "Steering King Pin Set",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-knuckle",
      name: "Steering Knuckle",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-knuckle-bearing",
      name: "Steering Knuckle Bearing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-knuckle-insert",
      name: "Steering Knuckle Insert",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-knuckle-race",
      name: "Steering Knuckle Race",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-knuckle-seal",
      name: "Steering Knuckle Seal",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-pinion-angle-adjusting-bolt",
      name: "Steering Pinion Angle Adjusting Bolt",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-pitman-arm",
      name: "Steering Pitman Arm",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-shaft",
      name: "Steering Shaft",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-shaft-bearing",
      name: "Steering Shaft Bearing",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-shaft-repair-kit",
      name: "Steering Shaft Repair Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-solenoid-connector",
      name: "Steering Solenoid Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-assembly",
      name: "Steering Tie Rod Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-bushing",
      name: "Steering Tie Rod Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-end",
      name: "Steering Tie Rod End",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-end-adjusting-sleeve",
      name: "Steering Tie Rod End Adjusting Sleeve",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-end-assembly",
      name: "Steering Tie Rod End Assembly",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-end-bushing-kit",
      name: "Steering Tie Rod End Bushing Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-tie-rod-end-kit",
      name: "Steering Tie Rod End Kit",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-wheel-air-bag-module-coil-connector",
      name: "Steering Wheel Air Bag Module Coil Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-wheel-memory-relay",
      name: "Steering Wheel Memory Relay",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-wheel-memory-relay-connector",
      name: "Steering Wheel Memory Relay Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "steering-wheel-position-sensor-connector",
      name: "Steering Wheel Position Sensor Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "stepwell-light-bulb",
      name: "Stepwell Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "stepwell-light-connector",
      name: "Stepwell Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "stop-light-switch-relay",
      name: "Stop Light Switch Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "subwoofer-speaker-connector",
      name: "Subwoofer Speaker Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-load-temperature-sensor-connector",
      name: "Sun Load Temperature Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-visor",
      name: "Sun Visor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-visor-bracket",
      name: "Sun Visor Bracket",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-visor-clip",
      name: "Sun Visor Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-visor-light-bulb",
      name: "Sun Visor Light Bulb",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sun-visor-light-connector",
      name: "Sun Visor Light Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-connector",
      name: "Sunroof Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-control-module-connector",
      name: "Sunroof Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-drain-hose-clamp",
      name: "Sunroof Drain Hose Clamp",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-motor",
      name: "Sunroof Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-motor-connector",
      name: "Sunroof Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-relay",
      name: "Sunroof Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-relay-connector",
      name: "Sunroof Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-switch",
      name: "Sunroof Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunroof-switch-connector",
      name: "Sunroof Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "sunshade-motor-connector",
      name: "Sunshade Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "supercharger-bypass-solenoid-connector",
      name: "Supercharger Bypass Solenoid Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "supercharger-coupling",
      name: "Supercharger Coupling",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "supercharger-pressure-sensor",
      name: "Supercharger Pressure Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "supercharger-relay-connector",
      name: "Supercharger Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-ball-joint",
      name: "Suspension Ball Joint",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-bell-crank",
      name: "Suspension Bell Crank",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-coil-spring-seat",
      name: "Suspension Coil Spring Seat",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm",
      name: "Suspension Control Arm",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-and-ball-joint-assembly",
      name: "Suspension Control Arm and Ball Joint Assembly",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-ball-bushing",
      name: "Suspension Control Arm Ball Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bolt",
      name: "Suspension Control Arm Bolt",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bracket",
      name: "Suspension Control Arm Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bumper",
      name: "Suspension Control Arm Bumper",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bushing",
      name: "Suspension Control Arm Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bushing-kit",
      name: "Suspension Control Arm Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-bushing-tool",
      name: "Suspension Control Arm Bushing Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-kit",
      name: "Suspension Control Arm Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-link",
      name: "Suspension Control Arm Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-shaft-kit",
      name: "Suspension Control Arm Shaft Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-control-arm-support-bracket",
      name: "Suspension Control Arm Support Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-eccentric-bolt-kit",
      name: "Suspension Eccentric Bolt Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-integral-link",
      name: "Suspension Integral Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-knuckle-bushing",
      name: "Suspension Knuckle Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-ride-height-control-relay",
      name: "Suspension Ride Height Control Relay",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-ride-height-sensor",
      name: "Suspension Ride Height Sensor",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-ride-height-sensor-connector",
      name: "Suspension Ride Height Sensor Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-ride-height-sensor-connector-rod",
      name: "Suspension Ride Height Sensor Connector Rod",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-control-module-connector",
      name: "Suspension Self-Leveling Control Module Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-pump-relay-connector",
      name: "Suspension Self-Leveling Pump Relay Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-sensor-connector",
      name: "Suspension Self-Leveling Sensor Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-solenoid-connector",
      name: "Suspension Self-Leveling Solenoid Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-unit-accumulator",
      name: "Suspension Self-Leveling Unit Accumulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-self-leveling-wiring-harness-connector",
      name: "Suspension Self-Leveling Wiring Harness Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber",
      name: "Suspension Shock Absorber",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-strut-mount-bushing",
      name: "Suspension Shock Absorber / Strut Mount Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-air-hose-kit",
      name: "Suspension Shock Absorber Air Hose Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-and-coil-spring-assembly",
      name: "Suspension Shock Absorber and Coil Spring Assembly",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-bellows",
      name: "Suspension Shock Absorber Bellows",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-bumper-set",
      name: "Suspension Shock Absorber Bumper Set",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-bushing",
      name: "Suspension Shock Absorber Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-control-actuator-connector",
      name: "Suspension Shock Absorber Control Actuator Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-mount",
      name: "Suspension Shock Absorber Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-mount-bushing",
      name: "Suspension Shock Absorber Mount Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-mount-insulator",
      name: "Suspension Shock Absorber Mount Insulator",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-mounting-kit",
      name: "Suspension Shock Absorber Mounting Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-shock-absorber-relay",
      name: "Suspension Shock Absorber Relay",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-solenoid",
      name: "Suspension Solenoid",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-bracket",
      name: "Suspension Stabilizer Bar Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-bushing",
      name: "Suspension Stabilizer Bar Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-bushing-kit",
      name: "Suspension Stabilizer Bar Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-link",
      name: "Suspension Stabilizer Bar Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-link-bushing",
      name: "Suspension Stabilizer Bar Link Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-stabilizer-bar-link-kit",
      name: "Suspension Stabilizer Bar Link Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut",
      name: "Suspension Strut",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-and-coil-spring-assembly",
      name: "Suspension Strut and Coil Spring Assembly",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-assembly",
      name: "Suspension Strut Assembly",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-bearing",
      name: "Suspension Strut Bearing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-bellows",
      name: "Suspension Strut Bellows",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-bumper",
      name: "Suspension Strut Bumper",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-bumper-and-bellows-kit",
      name: "Suspension Strut Bumper and Bellows Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-cartridge",
      name: "Suspension Strut Cartridge",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-hardware-kit",
      name: "Suspension Strut Hardware Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-mount",
      name: "Suspension Strut Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-mount-bearing",
      name: "Suspension Strut Mount Bearing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-mount-bracket",
      name: "Suspension Strut Mount Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-mount-kit",
      name: "Suspension Strut Mount Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-mount-tool",
      name: "Suspension Strut Mount Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-rod",
      name: "Suspension Strut Rod",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-rod-bushing",
      name: "Suspension Strut Rod Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-strut-rod-bushing-kit",
      name: "Suspension Strut Rod Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-subframe-bushing",
      name: "Suspension Subframe Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-subframe-bushing-kit",
      name: "Suspension Subframe Bushing Kit",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-subframe-mount",
      name: "Suspension Subframe Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-track-bar",
      name: "Suspension Track Bar",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-track-bar-bushing",
      name: "Suspension Track Bar Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-trailing-arm",
      name: "Suspension Trailing Arm",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-trailing-arm-bracket",
      name: "Suspension Trailing Arm Bracket",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-trailing-arm-bushing",
      name: "Suspension Trailing Arm Bushing",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "suspension-yaw-sensor-connector",
      name: "Suspension Yaw Sensor Connector",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "tachometer-gauge-connector",
      name: "Tachometer Gauge Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light",
      name: "Tail Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-assembly",
      name: "Tail Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-bulb",
      name: "Tail Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-circuit-board",
      name: "Tail Light Circuit Board",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-circuit-board-connector",
      name: "Tail Light Circuit Board Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-connector",
      name: "Tail Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-connector-plate",
      name: "Tail Light Connector Plate",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-cover",
      name: "Tail Light Cover",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-lens",
      name: "Tail Light Lens",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-relay",
      name: "Tail Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-relay-connector",
      name: "Tail Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-socket",
      name: "Tail Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-wiring-harness",
      name: "Tail Light Wiring Harness",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tail-light-wiring-harness-connector",
      name: "Tail Light Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-handle",
      name: "Tailgate Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-handle-bezel",
      name: "Tailgate Handle Bezel",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-hinge-bushing",
      name: "Tailgate Hinge Bushing",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-hinge-kit",
      name: "Tailgate Hinge Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-hinge-pin-and-bushing-kit",
      name: "Tailgate Hinge Pin and Bushing Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-latch",
      name: "Tailgate Latch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-latch-rod",
      name: "Tailgate Latch Rod",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-latch-rod-clip",
      name: "Tailgate Latch Rod Clip",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-lift-support",
      name: "Tailgate Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-lock-actuator-motor",
      name: "Tailgate Lock Actuator Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-lock-cylinder",
      name: "Tailgate Lock Cylinder",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-lock-solenoid",
      name: "Tailgate Lock Solenoid",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-relay",
      name: "Tailgate Relay",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-release-switch",
      name: "Tailgate Release Switch",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-release-switch-connector",
      name: "Tailgate Release Switch Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-stop-bumper",
      name: "Tailgate Stop Bumper",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-striker-bolt",
      name: "Tailgate Striker Bolt",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-support-cable",
      name: "Tailgate Support Cable",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-window-relay",
      name: "Tailgate Window Relay",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-window-release-actuator-relay",
      name: "Tailgate Window Release Actuator Relay",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "tailgate-wiring-harness-extension-connector",
      name: "Tailgate Wiring Harness Extension Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "taper-bearing-cone",
      name: "Taper Bearing Cone",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "task-light-connector",
      name: "Task Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "telematics-interface-module-connector",
      name: "Telematics Interface Module Connector",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "temperature-control-relay",
      name: "Temperature Control Relay",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "temperature-control-switch-connector",
      name: "Temperature Control Switch Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "temperature-gauge-connector",
      name: "Temperature Gauge Connector",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "thermostat-bypass-pipe",
      name: "Thermostat Bypass Pipe",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "thermostat-bypass-pipe-gasket",
      name: "Thermostat Bypass Pipe Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "thermostat-bypass-pipe-seal",
      name: "Thermostat Bypass Pipe Seal",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-actuator-connector",
      name: "Throttle Actuator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-actuator-control-module-connector",
      name: "Throttle Actuator Control Module Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-body-boot",
      name: "Throttle Body Boot",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-body-motor",
      name: "Throttle Body Motor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-body-water-housing-gasket",
      name: "Throttle Body Water Housing Gasket",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-control-motor-connector",
      name: "Throttle Control Motor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-control-relay",
      name: "Throttle Control Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-control-relay-connector",
      name: "Throttle Control Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-lever-actuator-relay",
      name: "Throttle Lever Actuator Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-lever-actuator-relay-connector",
      name: "Throttle Lever Actuator Relay Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-position-sensor",
      name: "Throttle Position Sensor",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-position-sensor-connector",
      name: "Throttle Position Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-position-sensor-kit",
      name: "Throttle Position Sensor Kit",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "throttle-return-spring",
      name: "Throttle Return Spring",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "tilt-column-release-cable",
      name: "Tilt Column Release Cable",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "tilt-steering-wheel-relay",
      name: "Tilt Steering Wheel Relay",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "tilt-steering-wheel-relay-connector",
      name: "Tilt Steering Wheel Relay Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "time-delay-relay-accessory",
      name: "Time Delay Relay Accessory",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "time-delay-relay-accessory-connector",
      name: "Time Delay Relay Accessory Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "timing-light-signal-connector",
      name: "Timing Light Signal Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-control-unit",
      name: "Tire Pressure Monitoring System (TPMS) Control Unit",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-programmable-sensor",
      name: "Tire Pressure Monitoring System (TPMS) Programmable Sensor",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-programmable-sensor-valve-kit",
      name: "Tire Pressure Monitoring System (TPMS) Programmable Sensor Valve Kit",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-reset-switch-connector",
      name: "Tire Pressure Monitoring System (TPMS) Reset Switch Connector",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-sensor",
      name: "Tire Pressure Monitoring System (TPMS) Sensor",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-sensor-mounting-band",
      name: "Tire Pressure Monitoring System (TPMS) Sensor Mounting Band",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-sensor-nut",
      name: "Tire Pressure Monitoring System (TPMS) Sensor Nut",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-sensor-service-kit",
      name: "Tire Pressure Monitoring System (TPMS) Sensor Service Kit",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-sensor-valve-assembly",
      name: "Tire Pressure Monitoring System (TPMS) Sensor Valve Assembly",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-valve-kit",
      name: "Tire Pressure Monitoring System (TPMS) Valve Kit",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-valve-stem",
      name: "Tire Pressure Monitoring System (TPMS) Valve Stem",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-pressure-monitoring-system-tpms-valve-stem-cap",
      name: "Tire Pressure Monitoring System (TPMS) Valve Stem Cap",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "tire-valve-stem",
      name: "Tire Valve Stem",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "toe-compensator-link",
      name: "Toe Compensator Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "torque-converter-hardware",
      name: "Torque Converter Hardware",
      categories: [
        {
          category_id: "hardware-and-service-supplies",
          category_name: "Hardware and Service Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "torsion-bar-crossmember-mount",
      name: "Torsion Bar Crossmember Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "torsion-bar-mount",
      name: "Torsion Bar Mount",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "traction-control-brake-pressure-solenoid-connector",
      name: "Traction Control Brake Pressure Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "traction-control-module-connector",
      name: "Traction Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "traction-control-switch-connector",
      name: "Traction Control Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "traction-control-unit-relay",
      name: "Traction Control Unit Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-brake-control",
      name: "Trailer Brake Control",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-brake-control-connector",
      name: "Trailer Brake Control Connector",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-brake-control-module",
      name: "Trailer Brake Control Module",
      categories: [
        {
          category_id: "brake",
          category_name: "Brake",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-connector-kit",
      name: "Trailer Connector Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-hitch-plug",
      name: "Trailer Hitch Plug",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-marker-light-switch-relay",
      name: "Trailer Marker Light Switch Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-tow-harness-connector",
      name: "Trailer Tow Harness Connector",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-tow-relay",
      name: "Trailer Tow Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-tow-relay-connector",
      name: "Trailer Tow Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-tow-side-connector",
      name: "Trailer Tow Side Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-turn-signal-relay",
      name: "Trailer Turn Signal Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-wiring-harness-connector",
      name: "Trailer Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trailer-wiring-harness-relay",
      name: "Trailer Wiring Harness Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transaxle-output-speed-sensor",
      name: "Transaxle Output Speed Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case",
      name: "Transfer Case",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-actuator",
      name: "Transfer Case Actuator",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-adapter",
      name: "Transfer Case Adapter",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-adapter-gasket",
      name: "Transfer Case Adapter Gasket",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-adapter-seal",
      name: "Transfer Case Adapter Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-companion-flange-seal",
      name: "Transfer Case Companion Flange Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-control-lever",
      name: "Transfer Case Control Lever",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-control-lever-bushing",
      name: "Transfer Case Control Lever Bushing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-control-module-connector",
      name: "Transfer Case Control Module Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-countershaft-bearing",
      name: "Transfer Case Countershaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-debris-magnet",
      name: "Transfer Case Debris Magnet",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-drive-gear-seal",
      name: "Transfer Case Drive Gear Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-drive-sprocket-bearing",
      name: "Transfer Case Drive Sprocket Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-encoder-motor-connector",
      name: "Transfer Case Encoder Motor Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-extension-housing-bushing",
      name: "Transfer Case Extension Housing Bushing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-extension-housing-seal",
      name: "Transfer Case Extension Housing Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-gasket",
      name: "Transfer Case Gasket",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-gasket-set",
      name: "Transfer Case Gasket Set",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-idler-shaft-bearing",
      name: "Transfer Case Idler Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-idler-shaft-race",
      name: "Transfer Case Idler Shaft Race",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-input-shaft-bearing",
      name: "Transfer Case Input Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-input-shaft-pilot-bearing",
      name: "Transfer Case Input Shaft Pilot Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-input-shaft-race",
      name: "Transfer Case Input Shaft Race",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-input-shaft-repair-sleeve",
      name: "Transfer Case Input Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-input-shaft-seal",
      name: "Transfer Case Input Shaft Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-intermediate-shaft-bearing",
      name: "Transfer Case Intermediate Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-main-shaft-bearing",
      name: "Transfer Case Main Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-main-shaft-pilot-bearing",
      name: "Transfer Case Main Shaft Pilot Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-main-shaft-seal",
      name: "Transfer Case Main Shaft Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-manual-lever-position-sensor",
      name: "Transfer Case Manual Lever Position Sensor",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-motor",
      name: "Transfer Case Motor",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-motor-gear",
      name: "Transfer Case Motor Gear",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-mounting-adapter-seal",
      name: "Transfer Case Mounting Adapter Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-mounting-adaptor-kit",
      name: "Transfer Case Mounting Adaptor Kit",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-mounting-adaptor-repair-sleeve",
      name: "Transfer Case Mounting Adaptor Repair Sleeve",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-oil-drain-plug",
      name: "Transfer Case Oil Drain Plug",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-oil-fill-plug",
      name: "Transfer Case Oil Fill Plug",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-oil-pump-housing-bearing",
      name: "Transfer Case Oil Pump Housing Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-oil-pump-housing-seal",
      name: "Transfer Case Oil Pump Housing Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-bearing",
      name: "Transfer Case Output Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-bearing-cup",
      name: "Transfer Case Output Shaft Bearing Cup",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-bushing",
      name: "Transfer Case Output Shaft Bushing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-pilot-bearing",
      name: "Transfer Case Output Shaft Pilot Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-race",
      name: "Transfer Case Output Shaft Race",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-repair-sleeve",
      name: "Transfer Case Output Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-seal",
      name: "Transfer Case Output Shaft Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-seal-kit",
      name: "Transfer Case Output Shaft Seal Kit",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-output-shaft-sensor",
      name: "Transfer Case Output Shaft Sensor",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-pinion-shaft-bearing",
      name: "Transfer Case Pinion Shaft Bearing",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-pinion-shaft-repair-sleeve",
      name: "Transfer Case Pinion Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-power-take-off-pto-shaft-repair-sleeve",
      name: "Transfer Case Power Take Off (PTO) Shaft Repair Sleeve",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-power-take-off-pto-shaft-seal",
      name: "Transfer Case Power Take Off (PTO) Shaft Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-power-take-off-pto-switch-connector",
      name: "Transfer Case Power Take Off (PTO) Switch Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-range-sensor",
      name: "Transfer Case Range Sensor",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-relay",
      name: "Transfer Case Relay",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-selector-switch-connector",
      name: "Transfer Case Selector Switch Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-control-relay",
      name: "Transfer Case Shift Control Relay",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-control-relay-connector",
      name: "Transfer Case Shift Control Relay Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-fork",
      name: "Transfer Case Shift Fork",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-harness-connector",
      name: "Transfer Case Shift Harness Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-indicator-connector",
      name: "Transfer Case Shift Indicator Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-indicator-switch-connector",
      name: "Transfer Case Shift Indicator Switch Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-linkage",
      name: "Transfer Case Shift Linkage",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-motor-connector",
      name: "Transfer Case Shift Motor Connector",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-shift-shaft-seal",
      name: "Transfer Case Shift Shaft Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-side-gear-seal",
      name: "Transfer Case Side Gear Seal",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-switch",
      name: "Transfer Case Switch",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transfer-case-vent",
      name: "Transfer Case Vent",
      categories: [
        {
          category_id: "transfer-case",
          category_name: "Transfer Case",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-bell-housing",
      name: "Transmission Bell Housing",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-bell-housing-inspection-cover",
      name: "Transmission Bell Housing Inspection Cover",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-case-cover",
      name: "Transmission Case Cover",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-clutch-friction-plate",
      name: "Transmission Clutch Friction Plate",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-clutch-friction-plate-kit",
      name: "Transmission Clutch Friction Plate Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-clutch-kit",
      name: "Transmission Clutch Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-control-module",
      name: "Transmission Control Module",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-control-module-connector",
      name: "Transmission Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-control-relay",
      name: "Transmission Control Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-control-relay-connector",
      name: "Transmission Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-drain-plug",
      name: "Transmission Drain Plug",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-filter-kit",
      name: "Transmission Filter Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-filter-seal",
      name: "Transmission Filter Seal",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-fluid-temperature-sensor-connector",
      name: "Transmission Fluid Temperature Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-fluid-valve-assembly-connector",
      name: "Transmission Fluid Valve Assembly Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-input-shaft-speed-sensor-connector",
      name: "Transmission Input Shaft Speed Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-mount",
      name: "Transmission Mount",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-cooler-end-fitting",
      name: "Transmission Oil Cooler End Fitting",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-cooler-line-clip",
      name: "Transmission Oil Cooler Line Clip",
      categories: [
        {
          category_id: "belts-and-cooling",
          category_name: "Belts and Cooling",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-filter",
      name: "Transmission Oil Filter",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-pan",
      name: "Transmission Oil Pan",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-pan-gasket",
      name: "Transmission Oil Pan Gasket",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-oil-pan-kit",
      name: "Transmission Oil Pan Kit",
      categories: [
        {
          category_id: "transmission",
          category_name: "Transmission",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-output-shaft-speed-sensor-connector",
      name: "Transmission Output Shaft Speed Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-range-sensor",
      name: "Transmission Range Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-range-sensor-connector",
      name: "Transmission Range Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-shift-indicator-relay",
      name: "Transmission Shift Indicator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "transmission-shift-indicator-relay-connector",
      name: "Transmission Shift Indicator Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trip-odometer-reset-switch-connector",
      name: "Trip Odometer Reset Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "truck-bed-storage-box-lid-lift-support",
      name: "Truck Bed Storage Box Lid Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-ajar-indicator-light-connector",
      name: "Trunk Lid Ajar Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-ajar-indicator-switch-connector",
      name: "Trunk Lid Ajar Indicator Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-lift-support",
      name: "Trunk Lid Lift Support",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-pull-down-motor-connector",
      name: "Trunk Lid Pull Down Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-pull-down-switch-connector",
      name: "Trunk Lid Pull Down Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-actuator-solenoid-connector",
      name: "Trunk Lid Release Actuator Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-cable",
      name: "Trunk Lid Release Cable",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-relay",
      name: "Trunk Lid Release Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-relay-connector",
      name: "Trunk Lid Release Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-switch",
      name: "Trunk Lid Release Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-release-switch-connector",
      name: "Trunk Lid Release Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lid-wiring-harness-connector",
      name: "Trunk Lid Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-light-bulb",
      name: "Trunk Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-light-connector",
      name: "Trunk Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-light-socket",
      name: "Trunk Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lock",
      name: "Trunk Lock",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lock-actuator-motor",
      name: "Trunk Lock Actuator Motor",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lock-cylinder-connector",
      name: "Trunk Lock Cylinder Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-lock-linkage-connector",
      name: "Trunk Lock Linkage Connector",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-open-warning-switch",
      name: "Trunk Open Warning Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "trunk-or-cargo-area-light",
      name: "Trunk or Cargo Area Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turbine-speed-sensor-connector",
      name: "Turbine Speed Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger",
      name: "Turbocharger",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-control-relay",
      name: "Turbocharger Boost Control Relay",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-control-relay-connector",
      name: "Turbocharger Boost Control Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-sensor",
      name: "Turbocharger Boost Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-sensor-connector",
      name: "Turbocharger Boost Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-solenoid",
      name: "Turbocharger Boost Solenoid",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-boost-solenoid-connector",
      name: "Turbocharger Boost Solenoid Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-bypass-connector",
      name: "Turbocharger Bypass Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-connector",
      name: "Turbocharger Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-coolant-line",
      name: "Turbocharger Coolant Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-coolant-return-line",
      name: "Turbocharger Coolant Return Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-drain-gasket",
      name: "Turbocharger Drain Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-drain-tube",
      name: "Turbocharger Drain Tube",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-exhaust-gasket",
      name: "Turbocharger Exhaust Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-exhaust-pipe-gasket",
      name: "Turbocharger Exhaust Pipe Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-gasket",
      name: "Turbocharger Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-gasket-kit",
      name: "Turbocharger Gasket Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-inlet-gasket",
      name: "Turbocharger Inlet Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-intake-pressure-sensor-connector",
      name: "Turbocharger Intake Pressure Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-kit",
      name: "Turbocharger Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-mounting-gasket",
      name: "Turbocharger Mounting Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-mounting-gasket-set",
      name: "Turbocharger Mounting Gasket Set",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-mounting-kit",
      name: "Turbocharger Mounting Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-oil-line",
      name: "Turbocharger Oil Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-oil-return-line",
      name: "Turbocharger Oil Return Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-oil-return-tube",
      name: "Turbocharger Oil Return Tube",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-oil-supply-line",
      name: "Turbocharger Oil Supply Line",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-oil-supply-line-gasket",
      name: "Turbocharger Oil Supply Line Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-outlet-gasket",
      name: "Turbocharger Outlet Gasket",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-pressure-indicator-connector",
      name: "Turbocharger Pressure Indicator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-stud",
      name: "Turbocharger Stud",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-up-pipe-kit",
      name: "Turbocharger Up Pipe Kit",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-wastegate-actuator-connector",
      name: "Turbocharger Wastegate Actuator Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-wastegate-connector",
      name: "Turbocharger Wastegate Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turbocharger-wastegate-vacuum-actuator-and-solenoid-connector",
      name: "Turbocharger Wastegate Vacuum Actuator and Solenoid Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-cruise-control-tilt-lever",
      name: "Turn Signal / Cruise Control / Tilt Lever",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-side-marker-light",
      name: "Turn Signal / Parking / Side Marker Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-side-marker-light-assembly",
      name: "Turn Signal / Parking / Side Marker Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-light",
      name: "Turn Signal / Parking Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-light-assembly",
      name: "Turn Signal / Parking Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-light-bulb",
      name: "Turn Signal / Parking Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-parking-light-connector",
      name: "Turn Signal / Parking Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-side-marker-light-assembly",
      name: "Turn Signal / Side Marker Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-side-marker-light-connector",
      name: "Turn Signal / Side Marker Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-washer-lever",
      name: "Turn Signal / Washer Lever",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-cam",
      name: "Turn Signal Cam",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-cam-retainer-spring",
      name: "Turn Signal Cam Retainer Spring",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-flasher",
      name: "Turn Signal Flasher",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-indicator-light",
      name: "Turn Signal Indicator Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-indicator-light-bulb",
      name: "Turn Signal Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-indicator-light-connector",
      name: "Turn Signal Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-lever",
      name: "Turn Signal Lever",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-light",
      name: "Turn Signal Light",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-light-assembly",
      name: "Turn Signal Light Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-light-bulb",
      name: "Turn Signal Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-light-connector",
      name: "Turn Signal Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-light-socket",
      name: "Turn Signal Light Socket",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-relay",
      name: "Turn Signal Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-relay-connector",
      name: "Turn Signal Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-switch",
      name: "Turn Signal Switch",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-switch-connector",
      name: "Turn Signal Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "turn-signal-wiring-harness-connector",
      name: "Turn Signal Wiring Harness Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "twilight-sentinel-relay",
      name: "Twilight Sentinel Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "twilight-sentinel-relay-connector",
      name: "Twilight Sentinel Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "under-hood-light-bulb",
      name: "Under Hood Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "under-hood-light-connector",
      name: "Under Hood Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "undercar-shield",
      name: "Undercar Shield",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "universal-joint",
      name: "Universal Joint",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "universal-joint-c-clip",
      name: "Universal Joint C-Clip",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "universal-joint-strap-kit",
      name: "Universal Joint Strap Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "universal-joint-u-bolt-kit",
      name: "Universal Joint U-Bolt Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "unused-accessory-relay",
      name: "Unused Accessory Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-check-valve",
      name: "Vacuum Check Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-control-valve",
      name: "Vacuum Control Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-hose",
      name: "Vacuum Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump",
      name: "Vacuum Pump",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump-connector",
      name: "Vacuum Pump Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump-gasket",
      name: "Vacuum Pump Gasket",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump-pulley",
      name: "Vacuum Pump Pulley",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump-relay",
      name: "Vacuum Pump Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-pump-repair-kit",
      name: "Vacuum Pump Repair Kit",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-reservoir",
      name: "Vacuum Reservoir",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vacuum-switching-valve",
      name: "Vacuum Switching Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "valley-pan-gasket",
      name: "Valley Pan Gasket",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "valley-pan-gasket-set",
      name: "Valley Pan Gasket Set",
      categories: [
        {
          category_id: "engine",
          category_name: "Engine",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister",
      name: "Vapor Canister",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-connector",
      name: "Vapor Canister Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-filter",
      name: "Vapor Canister Filter",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-hose-clamp",
      name: "Vapor Canister Hose Clamp",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-hose-retainer",
      name: "Vapor Canister Hose Retainer",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-solenoid",
      name: "Vapor Canister Purge Solenoid",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-solenoid-bolt",
      name: "Vapor Canister Purge Solenoid Bolt",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-solenoid-connector",
      name: "Vapor Canister Purge Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-switch-connector",
      name: "Vapor Canister Purge Switch Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-valve",
      name: "Vapor Canister Purge Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-valve-connector",
      name: "Vapor Canister Purge Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-purge-valve-hose",
      name: "Vapor Canister Purge Valve Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-vent-hose",
      name: "Vapor Canister Vent Hose",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-vent-solenoid",
      name: "Vapor Canister Vent Solenoid",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-vent-solenoid-connector",
      name: "Vapor Canister Vent Solenoid Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-vent-solenoid-harness",
      name: "Vapor Canister Vent Solenoid Harness",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-canister-vent-valve",
      name: "Vapor Canister Vent Valve",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "vapor-management-valve-connector",
      name: "Vapor Management Valve Connector",
      categories: [
        {
          category_id: "emission-control",
          category_name: "Emission Control",
          position: 0,
        },
      ],
    },
    {
      id: "variable-assist-power-steering-module-connector",
      name: "Variable Assist Power Steering Module Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "variable-power-steering-solenoid-connector",
      name: "Variable Power Steering Solenoid Connector",
      categories: [
        {
          category_id: "steering",
          category_name: "Steering",
          position: 0,
        },
      ],
    },
    {
      id: "variable-restrictor-valve",
      name: "Variable Restrictor Valve",
      categories: [
        {
          category_id: "hvac",
          category_name: "HVAC",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-battery",
      name: "Vehicle Battery",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-lift-pad",
      name: "Vehicle Lift Pad",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-power-control-module-connector",
      name: "Vehicle Power Control Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-speed-sensor",
      name: "Vehicle Speed Sensor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-speed-sensor-connector",
      name: "Vehicle Speed Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-speed-sensor-seal",
      name: "Vehicle Speed Sensor Seal",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-speed-warning-relay",
      name: "Vehicle Speed Warning Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-mounted-spotlight-bulb",
      name: "Vehicle-Mounted Spotlight Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "vehicle-mounted-spotlight-switch-connector",
      name: "Vehicle-Mounted Spotlight Switch Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "video-cassette-player-relay",
      name: "Video Cassette Player Relay",
      categories: [
        {
          category_id: "entertainment-and-telematics",
          category_name: "Entertainment and Telematics",
          position: 0,
        },
      ],
    },
    {
      id: "video-monitor-connector",
      name: "Video Monitor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "voltage-converter-connector",
      name: "Voltage Converter Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "voltage-regulator",
      name: "Voltage Regulator",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "voltage-regulator-connector",
      name: "Voltage Regulator Connector",
      categories: [
        {
          category_id: "electrical-charging-and-starting",
          category_name: "Electrical, Charging and Starting",
          position: 0,
        },
      ],
    },
    {
      id: "warning-buzzer-relay",
      name: "Warning Buzzer Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "warning-buzzer-relay-connector",
      name: "Warning Buzzer Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "warning-light-relay",
      name: "Warning Light Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "warning-light-relay-connector",
      name: "Warning Light Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "warning-module-connector",
      name: "Warning Module Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-level-light-connector",
      name: "Washer Fluid Level Light Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-level-sensor",
      name: "Washer Fluid Level Sensor",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-level-sensor-connector",
      name: "Washer Fluid Level Sensor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-level-sensor-seal",
      name: "Washer Fluid Level Sensor Seal",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-reservoir",
      name: "Washer Fluid Reservoir",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-fluid-reservoir-cap",
      name: "Washer Fluid Reservoir Cap",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-pump-relay",
      name: "Washer Pump Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "washer-pump-relay-connector",
      name: "Washer Pump Relay Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-wif-indicator-light-bulb",
      name: "Water In Fuel (WiF) Indicator Light Bulb",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-wif-indicator-light-connector",
      name: "Water In Fuel (WiF) Indicator Light Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-wif-indicator-relay",
      name: "Water In Fuel (WiF) Indicator Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-wif-sensor",
      name: "Water In Fuel (WiF) Sensor",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-wif-sensor-connector",
      name: "Water In Fuel (WiF) Sensor Connector",
      categories: [
        {
          category_id: "air-and-fuel-delivery",
          category_name: "Air and Fuel Delivery",
          position: 0,
        },
      ],
    },
    {
      id: "water-in-fuel-sensor-wrench",
      name: "Water in Fuel Sensor Wrench",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "watts-link",
      name: "Watts Link",
      categories: [
        {
          category_id: "suspension",
          category_name: "Suspension",
          position: 0,
        },
      ],
    },
    {
      id: "wheel",
      name: "Wheel",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-alignment-tool",
      name: "Wheel Alignment Tool",
      categories: [
        {
          category_id: "vehicles-equipment-tools-and-supplies",
          category_name: "Vehicles, Equipment, Tools, and Supplies",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bead-lock",
      name: "Wheel Bead Lock",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing",
      name: "Wheel Bearing",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-and-hub-assembly",
      name: "Wheel Bearing and Hub Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-and-hub-assembly-repair-kit",
      name: "Wheel Bearing and Hub Assembly Repair Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-and-race-set",
      name: "Wheel Bearing and Race Set",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-and-seal-kit",
      name: "Wheel Bearing and Seal Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-assembly",
      name: "Wheel Bearing Assembly",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-dust-cap",
      name: "Wheel Bearing Dust Cap",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-kit",
      name: "Wheel Bearing Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-lock-ring",
      name: "Wheel Bearing Lock Ring",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-race",
      name: "Wheel Bearing Race",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-retainer",
      name: "Wheel Bearing Retainer",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-bearing-retaining-ring",
      name: "Wheel Bearing Retaining Ring",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-cap",
      name: "Wheel Cap",
      categories: [
        {
          category_id: "tire-and-wheel",
          category_name: "Tire and Wheel",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-hub",
      name: "Wheel Hub",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-hub-bolt",
      name: "Wheel Hub Bolt",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-hub-hardware-kit",
      name: "Wheel Hub Hardware Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-hub-o-ring",
      name: "Wheel Hub O-Ring",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-hub-repair-kit",
      name: "Wheel Hub Repair Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-seal",
      name: "Wheel Seal",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-seal-kit",
      name: "Wheel Seal Kit",
      categories: [
        {
          category_id: "driveline-and-axles",
          category_name: "Driveline and Axles",
          position: 0,
        },
      ],
    },
    {
      id: "wheel-speed-sensor-connector",
      name: "Wheel Speed Sensor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-crank-handle",
      name: "Window Crank Handle",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-connector",
      name: "Window Defroster Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-grid-terminal-connector",
      name: "Window Defroster Grid Terminal Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-relay",
      name: "Window Defroster Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-relay-connector",
      name: "Window Defroster Relay Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-switch",
      name: "Window Defroster Switch",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-defroster-switch-connector",
      name: "Window Defroster Switch Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "window-guide",
      name: "Window Guide",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor",
      name: "Window Motor",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor-and-regulator-assembly",
      name: "Window Motor and Regulator Assembly",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor-connector",
      name: "Window Motor Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor-gear",
      name: "Window Motor Gear",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor-gear-kit",
      name: "Window Motor Gear Kit",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-motor-gear-plug",
      name: "Window Motor Gear Plug",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-regulator",
      name: "Window Regulator",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-regulator-guide",
      name: "Window Regulator Guide",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-regulator-kit",
      name: "Window Regulator Kit",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-regulator-roller",
      name: "Window Regulator Roller",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-regulator-tape",
      name: "Window Regulator Tape",
      categories: [
        {
          category_id: "body",
          category_name: "Body",
          position: 0,
        },
      ],
    },
    {
      id: "window-washer-pump-motor-connector",
      name: "Window Washer Pump Motor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-moisture-sensor-connector",
      name: "Windshield Moisture Sensor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-check-valve",
      name: "Windshield Washer Check Valve",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-control-module-connector",
      name: "Windshield Washer Control Module Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-fluid-heater-connector",
      name: "Windshield Washer Fluid Heater Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-nozzle",
      name: "Windshield Washer Nozzle",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-nozzle-connector",
      name: "Windshield Washer Nozzle Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-pump",
      name: "Windshield Washer Pump",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-pump-connector",
      name: "Windshield Washer Pump Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-pump-repair-kit",
      name: "Windshield Washer Pump Repair Kit",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-relay",
      name: "Windshield Washer Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-washer-switch-connector",
      name: "Windshield Washer Switch Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-and-washer-switch",
      name: "Windshield Wiper and Washer Switch",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-and-washer-switch-connector",
      name: "Windshield Wiper and Washer Switch Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-arm",
      name: "Windshield Wiper Arm",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-blade",
      name: "Windshield Wiper Blade",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-blade-set",
      name: "Windshield Wiper Blade Set",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-control-module-connector",
      name: "Windshield Wiper Control Module Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-linkage",
      name: "Windshield Wiper Linkage",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-linkage-bushing",
      name: "Windshield Wiper Linkage Bushing",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-motor",
      name: "Windshield Wiper Motor",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-motor-connector",
      name: "Windshield Wiper Motor Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-motor-relay",
      name: "Windshield Wiper Motor Relay",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-pulse-control-module-connector",
      name: "Windshield Wiper Pulse Control Module Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-relay-connector",
      name: "Windshield Wiper Relay Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-switch",
      name: "Windshield Wiper Switch",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-switch-connector",
      name: "Windshield Wiper Switch Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "windshield-wiper-wiring-harness-connector",
      name: "Windshield Wiper Wiring Harness Connector",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "wiper-motor-pulse-board-module",
      name: "Wiper Motor Pulse Board Module",
      categories: [
        {
          category_id: "wiper-and-washer",
          category_name: "Wiper and Washer",
          position: 0,
        },
      ],
    },
    {
      id: "wiring-fuse",
      name: "Wiring Fuse",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "wiring-relay",
      name: "Wiring Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "wiring-relay-connector",
      name: "Wiring Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "x-contact-relay",
      name: "X-Contact Relay",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
    {
      id: "x-contact-relay-connector",
      name: "X-Contact Relay Connector",
      categories: [
        {
          category_id: "electrical-lighting-and-body",
          category_name: "Electrical, Lighting and Body",
          position: 0,
        },
      ],
    },
  ],
  meta: {
    total: "3500",
    total_found: "4096",
  },
};

// const categorizeData = [];

// data.parttypes.forEach((item) => {
//   const catName = item.categories[0].category_name;
//   if (!categorizeData.includes(catName)) {
//     categorizeData.push(catName);
//   }
// });

// console.log(categorizeData);

export const categorizeData = [
  "Electrical, Lighting and Body",
  "Driveline and Axles",
  "HVAC",
  "Belts and Cooling",
  "Vehicles, Equipment, Tools, and Supplies",
  "Brake",
  "Body",
  "Suspension",
  "Emission Control",
  "Engine",
  "Air and Fuel Delivery",
  "Electrical, Charging and Starting",
  "Entertainment and Telematics",
  "Transmission",
  "Oil, Fluids and Chemicals",
  "Ignition",
  "Hardware and Service Supplies",
  "Exhaust",
  "Household, Shop and Office Products",
  "Accessories",
  "Wiper and Washer",
  "Steering",
  "Tire and Wheel",
  "Transfer Case",
];

export const filteredData = (type) => {
  return data.parttypes.filter((i) => i.categories[0].category_name === type);
};

// const availableTypes = [];

// export const test = async () => {
//   const params = {
//     engine: "all",
//     submodel: "base",
//     category: "",
//     subcategory: "",
//     parttype: "",
//     offset: 0,
//     clientId: 201594,
//     orderby: "distance_asc",
//   };
//   try {
//     for (const item of data.parttypes) {
//       params.parttype = item.id;
//       const res = await axios.post(
//         "https://faceted-catalog-api-us1.sophio.com/api/v1/d6c4a436-5f1f-40a0-8184-7d3db09a8431/catalog-2/parts",
//         params
//       );
//       if (res.data.results.parts.length !== 1) {
//         availableTypes.push(item.id);
//       }
//     }
//     console.log(availableTypes);
//   } catch (err) {
//     console.log(err);
//   }
// };
