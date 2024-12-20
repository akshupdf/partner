import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';

export default function Build() {
  const navigate = useNavigate();

  const handlePolygonClick = (polygonId) => {
    navigate(`/details/${polygonId}`);
  };

  return (
    <div className=" bg-[#6b9855] ">
    <div className="">
      <h2 className="text-[81px] fixed top-[14vh] left-8 text-[#1F2C17] font-mont">KOMPLEKSI</h2>
      <h2 className="text-[81px] fixed top-[24vh] left-8 text-[#1F2C17] font-mont">TOPHANE</h2>
   
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2500 1400"
      >
        <image
          width="2500"
          height="1400"
          xlinkHref="https://projektet-dp-partners.roitiv.com/objektetImg/prerjet1.png"
        />
        <polygon
          className="st0"
          
           data-tooltip-id="polygon-tooltip"
           data-tooltip-content="Polygon 1: Click for details"
           onClick={() => handlePolygonClick(1)}
          points="1867.18,1208.95 1896.56,1207.86 1896.56,1203.59 1895.72,1203.59 1896.56,1180.77 1886.92,1180.77
    1886.64,1141.81 1896.8,1141 1825.73,1135.2 1795.13,1138.34 1692.54,1130.06 1721.73,1126.68 1641.73,1120.15 1612.4,1124.29
    1502.55,1115.64 1529.41,1111.21 1428.36,1103.18 1402.53,1107.86 1160.76,1089.47 987.1,1139.63 988.78,1207.19 1160.57,1185.45
    1402.72,1193.31 1428.36,1191.64 1501.34,1194.31 1474.95,1196.15 1612.49,1200.5 1641.13,1198.83 1721.22,1202.01 1695.02,1203.34
    1795.13,1206.52 1825.64,1205.35 1865.12,1206.69 1896.02,1207.71 1896.37,1207.73"
        />
        <polygon
          className="st0"
             data-tooltip-id="polygon-tooltip"
             data-tooltip-content="Polygon 2: Click for details"
             onClick={() => handlePolygonClick(2)}
          points="987.1,1140.48 1123.33,1101.02 1160.76,1090.31 1222.51,1095 1402.53,1108.71 1428.36,1104.03
    1529.41,1112.05 1502.55,1116.48 1612.4,1125.14 1641.73,1121 1721.73,1127.52 1692.54,1130.91 1795.13,1139.18 1825.73,1136.05
    1896.47,1141.82 1896.8,1141.85 1896.8,1137.33 1896.15,1137.33 1896.28,1115.15 1887.3,1114.06 1887.11,1076.02 1896.8,1074.85
    1825.92,1066.24 1795.51,1070.92 1692.31,1058.29 1721.69,1052.94 1641.41,1042.74 1612.59,1048.68 1502.55,1035.22
    1529.41,1028.36 1428.82,1015.82 1403.65,1023.35 1222.42,1001.36 1160.76,994.08 1122.68,1012.31 987.1,1077.61"
        />
          
        <polygon
          className="st0"
        data-tooltip-id="polygon-tooltip"
          data-tooltip-content="Polygon 3: Click for details"
          onClick={() => handlePolygonClick(3)}
          points="987.79,1084.83 987.79,1013.26 1161.82,905.24 1403.97,945.03 1429.37,934.71 1502.07,947.13
    1476.11,956.78 1612.95,979.61 1642.14,971.33 1722,985.5 1692.95,992.77 1795.68,1009.96 1826,1003.43 1896.87,1015.85
    1867.26,1021.37 1887.05,1024 1887.47,1024.06 1887.61,1054.41 1896.24,1055.61 1896.17,1077.68 1897.49,1077.99 1897.49,1081.57
    1826.61,1073.46 1796.2,1078.14 1692.99,1065.51 1722.37,1060.16 1642.09,1049.96 1613.28,1055.9 1503.24,1042.44 1530.1,1035.58
    1429.51,1023.04 1404.34,1030.57 1161.45,1001.3"
        />
     <polygon className="st0"
      data-tooltip-id="polygon-tooltip"
       data-tooltip-content="Polygon 4: Click for details"
       onClick={() => handlePolygonClick(4)}
        points="986.01,1016.11 986.01,954.49 1122.61,842.88 1160.23,811.77 1402.19,862.19 1427.73,849.15 
 1500.15,865.45 1473.2,877.99 1610.75,905.83 1640.22,895.3 1720.5,913.94 1689.62,922.89 1794.32,944.21 1824.64,936.43 
 1895.71,951.48 1864.78,958.76 1885.27,962.52 1885.83,990.36 1895.71,991.86 1895.09,1018.7 1824.22,1006.29 1793.9,1012.81 
 1691.17,995.63 1720.22,988.35 1640.36,974.18 1611.17,982.46 1474.33,959.63 1500.29,949.98 1427.59,937.56 1402.19,947.89 
 1160.04,908.09 "></polygon>
 <polygon className="st0" 
   data-tooltip-id="polygon-tooltip"
   data-tooltip-content="Polygon 5: Click for details"
   onClick={() => handlePolygonClick(5)}
 points="986.1,955.39 986.1,889.26 1121.58,754.15 1159.76,716.02 1401.16,777.89 1427.73,761.84 
 1500.34,780.9 1472.64,796.63 1611.49,831.07 1639.56,818.36 1720.03,839.09 1690.09,851.47 1793.39,876.88 1824.08,867.52 
 1895.8,886.25 1864.87,894.94 1885.83,899.63 1885.64,923.58 1891.26,924.37 1892.33,924.54 1892.66,947.41 1895.37,948.33 
 1895.42,951.96 1824.73,937.33 1794.42,945.11 1689.72,923.79 1720.59,914.84 1640.31,896.2 1610.84,906.73 1473.3,878.89 
 1500.24,866.35 1427.82,850.05 1402.28,863.09 1160.32,812.67 "></polygon>
<polygon className="st0"
  data-tooltip-id="polygon-tooltip"
  data-tooltip-content="Polygon 6: Click for details"
  onClick={() => handlePolygonClick(6)}
points="983.1,892.79 983.1,827.41 1118.86,668.47 1157.04,623.58 1399,696.06 1425.1,677 1496.4,699.07 
 1470.3,717.13 1608.4,758.18 1637.31,742.97 1717.24,768.11 1687.91,781.84 1791.42,812.44 1822.01,800.16 1892.8,822.73 
 1861.31,834.01 1882.64,839.24 1882.92,859.85 1891.13,862.92 1891.41,884.62 1892.26,885.12 1892.26,889.13 1821.08,871.05 
 1790.39,880.42 1687.09,855 1717.03,842.63 1636.56,821.89 1608.49,834.6 1469.64,800.16 1497.34,784.44 1424.73,765.37 
 1398.16,781.43 1156.76,719.56 "></polygon>
 <polygon className="st0"
   data-tooltip-id="polygon-tooltip"
   data-tooltip-content="Polygon 7: Click for details"
   onClick={() => handlePolygonClick(7)}
    points="980.41,765.59 1117.02,580.48 1154.26,529.65 1396.78,612.08 1422.04,590.51 1494.09,616.6 
 1468.08,636.83 1605.81,683.82 1634.44,666.93 1714.16,695.69 1684.96,711.41 1788.07,746.52 1819.14,732.81 1890.11,758.23 
 1860.12,770.44 1879.58,776.46 1880.7,795.02 1888.94,797.86 1888.94,819.93 1889.43,820.43 1889.33,824.7 1819.32,802.38 
 1788.73,814.66 1685.22,784.06 1714.55,770.33 1634.62,745.19 1605.71,760.4 1467.61,719.35 1493.71,701.29 1422.42,679.22 
 1396.31,698.28 1154.35,625.8 980.41,829.63 "></polygon>
 <path className="st0 " 
   data-tooltip-id="polygon-tooltip"
   data-tooltip-content="Polygon 8: Click for details"
   onClick={() => handlePolygonClick(8)}
   d="M981.25,767.81v-67.89l135.48-205.67l38.18-58.19l242.52,92.3l25.45-23.74l71.86,29.43l-26.2,23.08
 c46.19,18.98,92.38,37.95,138.57,56.93c9.25-5.9,18.5-11.8,27.75-17.7c26.48,10.05,52.95,20.1,79.43,30.15
 c-9.44,4.86-18.87,9.71-28.31,14.57l103.44,39.5l30.46-15.51l70.46,28.8l-30.22,13.5l20.77,8.03l-0.37,14.21l6.46,3.01l-0.56,21.82
 l3.93,1.5l0.12,3.83l-70.48-24.73l-31.06,13.71l-103.11-35.12l29.19-15.72l-79.72-28.76l-28.63,16.89l-137.73-46.99l26.01-20.23
 l-72.05-26.09l-25.26,21.57l-242.52-82.44L981.25,767.81z"></path>
 <polygon className=" unavailable"
   data-tooltip-id="polygon-tooltip"
   data-tooltip-content="Polygon 9: Click for details"
   onClick={() => handlePolygonClick(9)}
 points="1156.16,341.45 1117.43,406.33 981.94,637.25 981.94,701.29 1155.6,437.43 1398.12,529.73 
 1423.57,505.99 1495.43,535.42 1469.23,558.49 1606.96,611.67 1635.41,591.94 1715.13,623.71 1686.68,642.43 1790.12,681.94 
 1820.57,666.43 1891.03,695.23 1891.15,690.72 1889.91,690.09 1890.28,666.93 1886.26,666.1 1879.52,663.84 1880.36,652.13 
 1763.87,603.31 1620.25,541.94 1439.48,464.35 1217.17,368.54 "></polygon>
 <polygon className="st0" 
  data-tooltip-id="polygon-tooltip"
   data-tooltip-content="Polygon 10: Click for details"
   onClick={() => handlePolygonClick(10)}
   points="985.41,637.31 984.19,611.77 1036.69,520.47 1159.35,302.01 1198.65,319.19 1198.65,270.28 
 1198.65,265.43 1202.3,258.91 1313.45,311.58 1353.59,331.98 1358.65,304.14 1612.96,429.8 1612.96,453.13 1673.59,483.23 
 1672.96,479.46 1689.94,467.99 1801.31,523.11 1801.31,544.85 1887.39,586.48 1883.83,652.2 1159.63,341.51 "></polygon>
      </svg>
    </div>
    <Tooltip id="polygon-tooltip" place="right" className="w-[10vh] bg-[#6b9855] text-white text-xl"/>
   
  </div>
  
  )
}
