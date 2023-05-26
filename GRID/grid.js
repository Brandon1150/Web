window.onload = function () {
  // Data
  var data = [
    {
      axe: null,
      exp: null,
      status: true,
      time: "11:57:17",
      date: "2020-10-10",
      source: 3,
      clientname: "SATIRA",
      leg: "M",
      condition: "INACTIVO",
      ticker: "",
      size: 1000000,
      id: "5D9F0E7BBE",
      description: "LLOYD3",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "15:29:11",
      date: "2020-10-10",
      source: 6,
      clientname: "DAPERTTON",
      leg: "M",
      condition: "ACTIVO",
      ticker: "",
      size: 1000000,
      id: "5D9F4027BE",
      description: "HSBC",
    },
    {
      axe: null,
      exp: null,
      status: true,
      time: "15:57:23",
      date: "2020-10-10",
      source: 4,
      clientname: "ACNET",
      leg: "M",
      condition: "INACTIVO",
      ticker: "BRANDON",
      size: 1000000,
      id: "5D9F46C4C0",
      description: "BRANDON",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "20:05:21",
      date: "2020-10-10",
      source: 4,
      clientname: "ALENXA",
      leg: "M",
      condition: "INACTIVO",
      ticker: "",
      size: 1,
      id: "46769596",
      description: "HSBC",
    },
    {
      axe: null,
      exp: null,
      status: null,
      time: null,
      date: null,
      source: 4,
      clientname: "STANDAR FOODS",
      leg: "L1",
      condition: "INACTIVO",
      ticker: "",
      size: 1000000,
      id: null,
      description: "T 2.875",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "20:05:21",
      date: "2020-10-10",
      source: 4,
      clientname: "CALZANIMAL",
      leg: "M",
      condition: "INACTIVO",
      ticker: "",
      size: 1000000,
      id: "46769599",
      description: "BHP 5.",
    },
    {
      axe: null,
      exp: null,
      status: null,
      time: null,
      date: null,
      source: 4,
      clientname: "COCINA",
      leg: "L1",
      condition: "INACTIVO",
      ticker: "",
      size: 1000000,
      id: null,
      description: "T 2.875",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "20:05:21",
      date: "2020-10-10",
      source: 4,
      clientname: "COMETUS",
      leg: "M",
      condition: "ACTIVO",
      ticker: "",
      size: 1,
      id: "46769605",
      description: "RIOLN",
    },
    {
      axe: null,
      exp: null,
      status: null,
      time: null,
      date: null,
      source: 4,
      clientname: "AZNAR",
      leg: "L1",
      condition: "ACTIVO",
      ticker: "",
      size: 1000000,
      id: null,
      description: "T 2.875",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "20:05:21",
      date: "2020-10-10",
      source: 4,
      clientname: "BRATUS",
      leg: "M",
      condition: "INACTIVO",
      ticker: "",
      size: 1,
      id: "46769612",
      description: "RBS 6.",
    },
    {
      axe: null,
      exp: null,
      status: null,
      time: null,
      date: null,
      source: 4,
      clientname: "CANGREJITO",
      leg: "L1",
      condition: "INACTIVO",
      ticker: "",
      size: 1000000,
      id: null,
      description: "T 1.500",
    },
    {
      axe: null,
      exp: null,
      status: false,
      time: "20:06:15",
      date: "2020-10-10",
      source: 4,
      clientname: "KOFTE",
      leg: "M",
      condition: "ACTIVO",
      ticker: "",
      size: 1,
      id: "46769754",
      description: "HSBC",
    },
  ];
  // prepare the data
  let source = {
    datatype: "json",
    datafields: [
      { name: "axe" },
      { name: "exp", type: "string" },
      { name: "status", type: "bool" },
      { name: "status_metadata", type: "string" },
      { name: "time", type: "date", format: "HH:mm:ss" },
      { name: "date", type: "date", format: "yyyy-MM-dd" },
      { name: "source", type: "number" },
      { name: "clientname", type: "string" },
      { name: "leg", type: "string" },
      { name: "condition", type: "string" },
      { name: "ticker", type: "string" },
      { name: "size", type: "number" },
      { name: "id", type: "string" },
      { name: "description", type: "string" },
    ],
    localdata: data,
  };
  let dataAdapter = new $.jqx.dataAdapter(source, {
    beforeLoadComplete: function (records) {
      for (const key in records) {
        let record = records[key];
        if (record.status == null) {
          record.status_metadata = "null";
        } else {
          record.status_metadata = record.status;
        }
      }
      return records;
    },
    downloadComplete: function (data, status, xhr) {},
    loadComplete: function (data) {},
    loadError: function (xhr, status, error) {},
  });
  // initialize jqxGrid
  var grid = new jqxGrid("#grid", {
    theme: "dark",
    width: "100%",
    source: dataAdapter,
    autoheight: true,
    sortable: true,
    editable: true,
    showtoolbar: true,
    showstatusbar: true,
    showfilterrow: true,
    filterable: true,
    selectionmode: "multiplecellsadvanced",
    renderstatusbar: function (statusbar) {
      let container = $("<div style='margin: 5px;'></div>");
      let leftResult = "24 Items";
      let nextToLeftResult = "0 Selected";
      let rightResult = "114.4 Size";
      let leftSpan = $(
        `<span style='float: left; margin-top: 5px; margin-left: 18px;'>${leftResult}</span>`
      );
      let nextToLeftSpan = $(
        `<span style='float: left; margin-top: 5px; margin-left: 18px;'>${nextToLeftResult}</span>`
      );
      let rightSpan = $(
        `<span style='float: right; margin-top: 5px; margin-right: 45px;'>${rightResult}</span>`
      );
      container.append(leftSpan);
      container.append(nextToLeftSpan);
      container.append(rightSpan);
      statusbar.append(container);
    },
    groupable: true,
    columns: [
      {
        text: "Status",
        datafield: "status",
        width: 140,
        columntype: "button",
        cellclassname: function (row, column, value, data) {
          let result = "booleanvalue";
          switch (data.status_metadata) {
            case true:
              result = "activo";
              break;
            case false:
              result = "inactivo";
              break;
            default:
              break;
          }
          return result;
          
        },
        cellsrenderer: function (
          row,
          columnfield,
          value,
          defaulthtml,
          columnproperties,
          rowdata
        ) {
          let result = " ";
          switch (rowdata.status_metadata) {
            case true:
              result = "SI";
              break;
            case false:
              result = "NO";
              break;
            default:
              break;
          }
          return result;
        },
        buttonclick: function (row) {
          console.log("Click:", row);
        },
      },
      { text: "Time", datafield: "time", width: 100, cellsformat: "HH:mm:ss" },
      {
        text: "Date",
        datafield: "date",
        width: 100,
        cellsformat: "yyyy-MM-dd",
      },
      { text: "Source", datafield: "source", width: 100 },
      {
        text: "Client Name",
        datafield: "clientname",
        width: 240,
        cellclassname: "specialtext",
      },
      {
        text: "leg #",
        datafield: "leg",
        columntype: "dropdownlist",
        width: 100,
        cellclassname: function (row, column, value, data) {
          if (value === "M") {
            return "description";
          }
          return "";
        },
      },
      {
        text: "C.",
        datafield: "condition",
        columntype: "dropdownlist",
        width: 80,
        cellclassname: function (row, column, value, data) {
          if (value == "INACTIVO") {
            return "sellformat";
          } else if (value === "ACTIVO") {
            return "buyformat";
          }
        },
      },
      {
        text: "TICKER",
        datafield: "ticker",
        width: 100,
        cellclassname: "specialtext",
      },
      { text: "Size", datafield: "size", width: 100 },
      {
        text: "Id",
        datafield: "id",
        width: 100,
        cellclassname: "tooltip-column"
      },
      {
        text: "Description",
        datafield: "description",
        cellclassname: "description",
        columntype: "textbox",
      },
    ],
    columngroups: [
      { text: "Product Details", align: "center", name: "ProductDetails" },
    ],
  });

   $("#grid").on("cellmouseenter", function (event) {
    if (event.args.datafield === "id" || event.args.datafield === "nombre" || event.args.datafield === "curp") {
      var cell = event.args.cell;
      var tooltipContent = cell.attr("title");
      if (tooltipContent) {
        cell.jqxTooltip({
          content: tooltipContent,
          position: "mouse",
          autoHide: false,
        });
        cell.jqxTooltip("open");
      }
    }
  });

  $("#grid").on("cellmouseleave", function (event) {
    if (event.args.datafield === "id" || event.args.datafield === "nombre" || event.args.datafield === "curp") {
      var cell = event.args.cell;
      if (cell.jqxTooltip) {
        cell.jqxTooltip("destroy");
      }
    }
  });
  
  $("#excelExport").jqxButton();
  $("#htmlExport").jqxButton();
  $("#pdfExport").jqxButton();

  $("#excelExport").click(function () {
    $("#grid").jqxGrid("exportview", "xlsx", "jqxGrid");
  });
  $("#htmlExport").click(function () {
    $("#grid").jqxGrid("exportview", "html", "jqxGrid");
  });
  $("#pdfExport").click(function () {
    $("#grid").jqxGrid("exportview", "pdf", "jqxGrid");
  });

  
};