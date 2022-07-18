(function () {
    'use strict';
    // function([string1, string2],target id,[color1,color2]) 


    var last_year_data = [
        {
            "SERIAL NO": "11",
            "NAME": "Ronak Bohara",
            DURATION: "4:47:13"
        },
        {
            "SERIAL NO": "13",
            "NAME": "Kavita Nair",
            DURATION: "4:51:57"
        },
        {
            "SERIAL NO": "9",
            "NAME": "Biddappa",
            DURATION: "4:59:38"
        },
        {
            "SERIAL NO": "5",
            "NAME": "Manjunath Reddy",
            DURATION: "5:08:09"
        },
        {
            "SERIAL NO": "4",
            "NAME": "Vijay AM",
            DURATION: "5:29:29"
        },
        {
            "SERIAL NO": "15",
            "NAME": "Uttam Shetty",
            DURATION: "5:39:00"
        },
        {
            "SERIAL NO": "1",
            "NAME": "Sridhar Reddy",
            DURATION: "5:40:43"
        },
        {
            "SERIAL NO": "2",
            "NAME": "Vijay Alluri",
            DURATION: "5:40:43"
        },
        {
            "SERIAL NO": "16",
            "NAME": "Kiran Nikhil",
            DURATION: "5:59:26"
        },
        {
            "SERIAL NO": "7",
            "NAME": "Akshay BE",
            DURATION: "6:05:24"
        },
        {
            "SERIAL NO": "19",
            "NAME": "Dr.Chiran Babu",
            DURATION: "6:23:34"
        },
        {
            "SERIAL NO": "3",
            "NAME": "Vijaykumar Panchagatti",
            DURATION: "6:23:59"
        },
        {
            "SERIAL NO": "6",
            "NAME": "Sanjay Yadav",
            DURATION: "6:35:00"
        },
        {
            "SERIAL NO": "12",
            "NAME": "Chandrika Roy",
            DURATION: "6:46:32"
        },
        {
            "SERIAL NO": "17",
            "NAME": "Ashok S",
            DURATION: "6:50:00"
        },
        {
            "SERIAL NO": "14",
            "NAME": "Darshan Jain (DJ)",
            DURATION: "7:40:40"
        },
        {
            "SERIAL NO": "8",
            "NAME": "Prasad G",
            DURATION: "DNF"
        },
        {
            "SERIAL NO": "10",
            "NAME": "Nagraj",
            DURATION: "DNF"
        },

        {
            "SERIAL NO": "18",
            "NAME": "Bharani",
            DURATION: "DNF"
        }
    ];
    var runnersData = [
        {
            "NAME": "Karthik Anand",
            "BIB": "B4202028",
            "DURATION": "3:59:28",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Bhanumoorthy",
            "BIB": "B4202010",
            "DURATION": "4:15:31",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Paras",
            "BIB": "B4202040",
            "DURATION": "4:28:04",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Suneel Kumar Koyi",
            "BIB": "B4202061",
            "DURATION": "4:32:04",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Chandrakanth m",
            "BIB": "B4202013",
            "DURATION": "4:36:52",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vinay Krishnamurthy",
            "BIB": "B4202074",
            "DURATION": "4:37:33",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Sameer Joshi",
            "BIB": "B4202048",
            "DURATION": "4:39:58",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vandana Arora",
            "BIB": "B4202078",
            "DURATION": "4:42:24",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Kuljeet Singh",
            "BIB": "B4202032",
            "DURATION": "4:44:00",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Jay Moodley",
            "BIB": "B4202025",
            "DURATION": "4:49:45",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Ambuj Kumar",
            "BIB": "B4202002",
            "DURATION": "4:59:37",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Ashwini G",
            "BIB": "B4202009",
            "DURATION": "5:04:37",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Shital Mogane",
            "BIB": "B4202055",
            "DURATION": "5:05:44",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Uttam Kumar Shetty",
            "BIB": "B4202066",
            "DURATION": "5:08:57",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Sushil Kannan",
            "BIB": "B4202062",
            "DURATION": "5:17:06",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Prakash Arumugam",
            "BIB": "B4202042",
            "DURATION": "5:24:19",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Taher Merchant",
            "BIB": "B4202064",
            "DURATION": "5:26:25",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Rajesh Mylavarapu",
            "BIB": "B4202045",
            "DURATION": "5:26:29",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Sanjeev",
            "BIB": "B4202049",
            "DURATION": "5:35:21",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Dhananjaya G",
            "BIB": "B4202019",
            "DURATION": "5:43:45",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Naveen Kumar Ramasamy",
            "BIB": "B4202036",
            "DURATION": "5:44:49",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Raju Alluri",
            "BIB": "B4202047",
            "DURATION": "5:48:00",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Karthik Ramamurthy",
            "BIB": "B4202029",
            "DURATION": "5:49:04",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Krishna",
            "BIB": "B4202031",
            "DURATION": "5:53:20",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Venugopal Hanumanthaiah",
            "BIB": "B4202069",
            "DURATION": "5:53:50",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Deepa Bhat",
            "BIB": "B4202016",
            "DURATION": "6:06:18",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Suchitra P",
            "BIB": "B4202059",
            "DURATION": "6:07:48",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Nisha Millet",
            "BIB": "B4202038",
            "DURATION": "6:16:06",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Patrick Pitchappa",
            "BIB": "B4202041",
            "DURATION": "6:16:38",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Joyjeet Bose",
            "BIB": "B4202026",
            "DURATION": "6:21:50",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Satish VT",
            "BIB": "B4202077",
            "DURATION": "6:21:56",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Guruprasad Krishnamurthy",
            "BIB": "B4202023",
            "DURATION": "6:22:04",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Uttara Aiyer",
            "BIB": "B4202067",
            "DURATION": "6:29:12",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Santhosh Shivaram",
            "BIB": "B4202050",
            "DURATION": "6:32:23",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Lavanya Tekumalla",
            "BIB": "B4202033",
            "DURATION": "6:33:38",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Chaitra P",
            "BIB": "B4202012",
            "DURATION": "6:33:42",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Rajesh Punnoose",
            "BIB": "B4202046",
            "DURATION": "6:33:47",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Ashok S",
            "BIB": "B4202007",
            "DURATION": "6:34:37",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vinay Bhat",
            "BIB": "B4202073",
            "DURATION": "6:37:18",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vidyashankar Prasad",
            "BIB": "B4202071",
            "DURATION": "6:43:51",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Manmohan K R",
            "BIB": "B4202035",
            "DURATION": "6:45:32",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Shamala Manmohan",
            "BIB": "B4202052",
            "DURATION": "6:45:32",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Chiran Babu Appajaiah",
            "BIB": "B4202015",
            "DURATION": "6:47:11",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Bhuvan Surya Purushothama B N",
            "BIB": "B4202011",
            "DURATION": "6:48:49",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Naveen Wali",
            "BIB": "B4202037",
            "DURATION": "6:52:17",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vijay Sriram",
            "BIB": "B4202076",
            "DURATION": "6:52:22",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Kaleem pasha",
            "BIB": "B4202027",
            "DURATION": "6:52:40",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Giridhar LV",
            "BIB": "B4202020",
            "DURATION": "6:57:24",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Priya BR",
            "BIB": "B4202044",
            "DURATION": "7:08:30",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Mahesh Naik",
            "BIB": "B4202034",
            "DURATION": "7:08:56",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Sreedevi",
            "BIB": "B4202057",
            "DURATION": "7:19:43",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Abhinav Suresh",
            "BIB": "B4202001",
            "DURATION": "7:19:45",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Anant Mathur",
            "BIB": "B4202004",
            "DURATION": "7:28:04",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Prashant Bhujang",
            "BIB": "B4202043",
            "DURATION": "7:29:02",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Shankara Babu",
            "BIB": "B4202054",
            "DURATION": "7:34:09",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Gopikrishnan M",
            "BIB": "B4202021",
            "DURATION": "7:34:21",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Sukesh R Nayak",
            "BIB": "B4202060",
            "DURATION": "7:46:28",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vetrivel",
            "BIB": "B4202070",
            "DURATION": "7:46:28",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Anand Katta",
            "BIB": "B4202003",
            "DURATION": "7:49:29",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Vindhya Joseph",
            "BIB": "B4202075",
            "DURATION": "7:50:25",
            "CERTIFICATE": "Coming soon"
        },
        {
            "NAME": "Anikethan V",
            "BIB": "B4202005",
            "DURATION": "7:56:14",
            "CERTIFICATE": "Coming soon"
        }
    ];

    var certs = {
        'B4202075': 'https://drive.google.com/file/d/10NDVaejRrr-c--j8Lmrp12awQoXEPYiM/view?usp=sharing',
        'B4202074': 'https://drive.google.com/file/d/1Z4QQDjCY50yr4f3-XafW6NfF_eImnFUT/view?usp=sharing',
        'B4202073': 'https://drive.google.com/file/d/1MlUlrvcQwgKi4WnYG0PVdaoPrwMwLLeR/view?usp=sharing',
        'B4202076': 'https://drive.google.com/file/d/1JJFcwAYz6T1DbeUl_78dPbYM3EEkyYyk/view?usp=sharing',
        'B4202071': 'https://drive.google.com/file/d/1pb4CGnN6Pc50vLOQRWR4gOxzHcZPdANZ/view?usp=sharing',
        'B4202070': 'https://drive.google.com/file/d/1x0bNuy73EPtZKNn9xtb-G4bRw_Pw0JY-/view?usp=sharing',
        'B4202069': 'https://drive.google.com/file/d/1iL3qIBYRviuKTIv_M6Zxe6duO9iImTeC/view?usp=sharing',
        'B4202078': 'https://drive.google.com/file/d/1-QZxmgWUakBcdO3w5hkuYAI1KaOWlF2M/view?usp=sharing',
        'B4202067': 'https://drive.google.com/file/d/1QiJpNBwUfmgS1PRWmBQTwSqFBePN-XpL/view?usp=sharing',
        'B4202066': 'https://drive.google.com/file/d/1wWbWejH0RfEnixzjprlZ75Ro5VgT5mv8/view?usp=sharing',
        'B4202064': 'https://drive.google.com/file/d/1U-fh_XmTFvPs2av0XABIMJnujMaZFpuW/view?usp=sharing',
        'B4202062': 'https://drive.google.com/file/d/1PZQQel7wsDhFjkXN8k5rq-C5xGg5ASkY/view?usp=sharing',
        'B4202061': 'https://drive.google.com/file/d/1ZYFvaVenuLYy1q34LhxBncdml7mLEcuj/view?usp=sharing',
        'B4202060': 'https://drive.google.com/file/d/17qTaFJ7GaFkrGmZAencY9uYPfMPyv6Dg/view?usp=sharing',
        'B4202059': 'https://drive.google.com/file/d/1KVQZtrNxFuiRbE06mJTb2mvj5A8OWBVd/view?usp=sharing',
        'B4202057': 'https://drive.google.com/file/d/1plSmMN7hy73uD0N5NJ9tOusKg7tr2Nlm/view?usp=sharing',
        'B4202055': 'https://drive.google.com/file/d/10Fpk2nKoJg03-gtZpKpN1fXntYb4k3EI/view?usp=sharing',
        'B4202054': 'https://drive.google.com/file/d/1YFX8B3LqwSFoWUXToUNjlrK4FbohUv-J/view?usp=sharing',
        'B4202052': 'https://drive.google.com/file/d/1nRxLb-BdWCP-YE2ka5bsNzjhNfYY-5H9/view?usp=sharing',
        'B4202077': 'https://drive.google.com/file/d/1mRbPy6PsxwyB8yh7RQ1iiv98dwvrqBJp/view?usp=sharing',
        'B4202050': 'https://drive.google.com/file/d/1GBVL5GOGIdeL6PZf6Kg75-izK6QKcBOW/view?usp=sharing',
        'B4202049': 'https://drive.google.com/file/d/1NmTugou7Fsrd7QZaKCTp5rkq8FUlbJFS/view?usp=sharing',
        'B4202048': 'https://drive.google.com/file/d/1gxCTXLaF4Oi0zWHAy_Kl0tCgVVr8cK2R/view?usp=sharing',
        'B4202047': 'https://drive.google.com/file/d/1mLfTstPHIH0xCPu35pXYIiG6mCcp3BV7/view?usp=sharing',
        'B4202046': 'https://drive.google.com/file/d/1Z1Tease6p5XrOXDURjAwNmzqYIbKxFB1/view?usp=sharing',
        'B4202045': 'https://drive.google.com/file/d/1OljtnPU5qGcXvalYBfhXVoyhRxmEIVDF/view?usp=sharing',
        'B4202044': 'https://drive.google.com/file/d/1tuL8xkFxb_aRMsB4kqLcuaB5WHsBvosy/view?usp=sharing',
        'B4202043': 'https://drive.google.com/file/d/1aK1cN-CgYQ8WmjhKX2m5MaJIYRukvLyu/view?usp=sharing',
        'B4202042': 'https://drive.google.com/file/d/1GdXKr0ERIW3wob6M1py8m7l9-jSBWWEW/view?usp=sharing',
        'B4202041': 'https://drive.google.com/file/d/1bxxiIf4QX-WJ2BiTUbBu7GCe5sgEmSaE/view?usp=sharing',
        'B4202040': 'https://drive.google.com/file/d/13vR2u0uBqGE5jCHyfKUYQ1J7o8nyl9ve/view?usp=sharing',
        'B4202038': 'https://drive.google.com/file/d/1iqaUj0sp-tld0f3j-Pi7vTe6MNbLcvn1/view?usp=sharing',
        'B4202037': 'https://drive.google.com/file/d/1tDRkj5hqsqsnHiDSPWWYCZyOnS-1oJC1/view?usp=sharing',
        'B4202036': 'https://drive.google.com/file/d/181u97pOxpcLid80MMdafz06H3LzbObHn/view?usp=sharing',
        'B4202035': 'https://drive.google.com/file/d/1eI0klHsyzq2ZpiPsy2B75RFRzGshkIQ9/view?usp=sharing',
        'B4202034': 'https://drive.google.com/file/d/1dascTDcLk70Z-OBXq8a27L11_vyfxqow/view?usp=sharing',
        'B4202033': 'https://drive.google.com/file/d/1ZwkZQqGWyrlycb0Gp8AOFtMWPbPKvt_M/view?usp=sharing',
        'B4202032': 'https://drive.google.com/file/d/1kTDrjlPE7gLVJwaKULlV3P13YcA_GZLf/view?usp=sharing',
        'B4202031': 'https://drive.google.com/file/d/1H-bsffwxXBxguD_8FBShrvbsxt1ZwLtn/view?usp=sharing',
        'B4202029': 'https://drive.google.com/file/d/1gFBp6txsuW3jXtDXK0G-42f10sqIrK07/view?usp=sharing',
        'B4202028': 'https://drive.google.com/file/d/1I38Yr9J8yXwAc4_o6Ir-E9jcCExAA6Dm/view?usp=sharing',
        'B4202027': 'https://drive.google.com/file/d/1kUQTigxHgQjD2WjZvHP5GstKKFPe2f_Y/view?usp=sharing',
        'B4202026': 'https://drive.google.com/file/d/16j5WSjafTAIj8dmX4-SsF7C-Xg608fHn/view?usp=sharing',
        'B4202025': 'https://drive.google.com/file/d/1Ui7cScBZCn31J7R9LbBpXDZ-u4K7pq0F/view?usp=sharing',
        'B4202021': 'https://drive.google.com/file/d/1Kwpb6_tEgNbhL3M7gB6-1FhhrAaM28bF/view?usp=sharing',
        'B4202020': 'https://drive.google.com/file/d/13mL5HEg0ZUG-c9iOXRPiNMlh_hahmHhA/view?usp=sharing',
        'B4202019': 'https://drive.google.com/file/d/1xOo-na74h-pWLIOSXd83yxsrogOW-Ib-/view?usp=sharing',
        'B4202016': 'https://drive.google.com/file/d/153Xk-ymIglXLH6fcjx_BlKdrL_lyXTxa/view?usp=sharing',
        'B4202015': 'https://drive.google.com/file/d/1gpLnCj6YC-OQmQ7cVsOYuLxaePkSo8MZ/view?usp=sharing',
        'B4202013': 'https://drive.google.com/file/d/1nTMpetXmHWj5uA6Y68qcpYolODXy-MWE/view?usp=sharing',
        'B4202012': 'https://drive.google.com/file/d/1jwq_xN8FA3JZBdQ8v2AbgYR2Kj_4F3y7/view?usp=sharing',
        'B4202011': 'https://drive.google.com/file/d/1C2jROJp2dPfEE3tPPvm7u1uZvyzFsHiu/view?usp=sharing',
        'B4202010': 'https://drive.google.com/file/d/1PSJOSgATrUdor_WTKaXS7CfSOhjW1qeE/view?usp=sharing',
        'B4202009': 'https://drive.google.com/file/d/1ZMRdWOIeaDI4mmZkL0DuHDtPOKysDB25/view?usp=sharing',
        'B4202007': 'https://drive.google.com/file/d/1YzR59YsFd1Dp-eFn-fhqwPhVUiVVwWwp/view?usp=sharing',
        'B4202005': 'https://drive.google.com/file/d/1O6CE4uVGeOnYJ_UPq8sF0cj7zMVizZ3f/view?usp=sharing',
        'B4202004': 'https://drive.google.com/file/d/1jXJ00IlsuPZgcDrOZ5nfmP8CsISEUkSS/view?usp=sharing',
        'B4202003': 'https://drive.google.com/file/d/1uz4T_ZDbFgX74NPM_bVhc14fv7c-H2rL/view?usp=sharing',
        'B4202002': 'https://drive.google.com/file/d/1besKBUdLcjLG9Pl8-9tRxP5_7gYJV_y8/view?usp=sharing',
        'B4202001': 'https://drive.google.com/file/d/1CsBfSKQHdqD-hWUYEXE2HSAmAaYmyXEo/view?usp=sharing',
        'B4202023': 'https://drive.google.com/file/d/1hTtKSv0secD8bms97-Be5ZpkZPmUCKhu/view?usp=sharing'
    };

    function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
        data.forEach((d, i) => {
            var tr = nl.insertRow(i);
            Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
                var cell = tr.insertCell(j);
                if (k === "CERTIFICATE") {
                    cell.innerHTML = `<a href="${certs[d.BIB]}">${certs[d.BIB] ? 'Download' : 'Not Available'}</a>` // Assign object values to cells
                } else {
                    cell.innerHTML = d[k]; // Assign object values to cells
                }
            });
            nl.appendChild(tr);
        })
    }
    var resultTable = document.querySelector("#results-2");
    var resultTable_1 = document.querySelector("#results-1");
    addDataToTbody(resultTable, runnersData);
    addDataToTbody(resultTable_1, last_year_data);

})();
