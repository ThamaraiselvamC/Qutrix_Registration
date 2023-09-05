import { useState } from 'react';
import './Register.css'; // You can create a CSS file for styling
import {Link} from 'react-router-dom'

const RegistrationForm = () => {
  const [collegeName, setCollegeName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [members, setMembers] = useState([]);
  const [customCollegeName, setCustomCollegeName] = useState(''); // Add this state
  const [customCollegeInputVisible, setCustomCollegeInputVisible] = useState(false); // Add this state

const handleCollegeNameChange = (e) => {
  const value = e.target.value;
  if (value === 'Other') {
    setCollegeName('Other'); // Set collegeName to 'Other'
    setCustomCollegeName('');
    setCustomCollegeInputVisible(true);
  } else {
    setCustomCollegeInputVisible(false);
    setCollegeName(value);
  }
};


  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleAddMember = () => {
    if (members.length < 3) {
      setMembers([...members, { registerNo: '', name: '', phoneNumber: '' }]);
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

const handleSubmit = async() => {
  // Validate form fields
  if ((!collegeName || collegeName === 'Other') && !customCollegeInputVisible) {
    alert('Please select or enter a College Name.');
    return;
  }

  if (!departmentName) {
    alert('Please select a Department.');
    return;
  }

  if (!selectedEvent) {
    alert('Please select an Event.');
    return;
  }

  if (selectedEvent !== 'Marketing' && members.length !== 2) {
    alert('Please provide details for all 2 members.');
    return;
  }

  for (const member of members) {
    if (!member.registerNo || !member.name || !member.phoneNumber) {
      alert('Please fill out all required fields for all members.');
      return;
    }
  }

  // Use finalCollegeName to store the correct college name
  let finalCollegeName = collegeName;

  if (collegeName === 'Other') {
    if (!customCollegeName) {
      alert('Please enter the custom college name.');
      return;
    }
    finalCollegeName = customCollegeName;
  }

  // Other form submission logic
  console.log({
    collegeName: finalCollegeName,
    departmentName,
    selectedEvent,
    members,
  });

    // Validate form fields (same as your existing code)
  
    // Prepare the data to be sent
    const formData = {
      collegeName: finalCollegeName,
      departmentName,
      selectedEvent,
      members,
    };
    d
    
  };
   
  
  const handleReset = () => {
    setCollegeName('');
    setDepartmentName('');
    setSelectedEvent('');
    setMembers([]);
  };

  const handleShowDetails = () => {
    // Handle showing details logic here
  };

  const handleHome = () => {
    <Link to="/Home">Register Here</Link>
  };

  return (
    <div className="registration-form">
      <h2 className='h2'>Registration Form</h2>
      <form action='POST'>
        <div className='clgname'>
          <label>College Name:</label>
          <select
    value={collegeName}
    onChange={handleCollegeNameChange}
>
  <option value="">Select College</option>
  <option value="Amrita Institute of Technology">Amrita Institute of Technology</option>
  <option value="Avinashi Lingam Institute for Home Science & Higher Education for Women">Avinashi Lingam Institute for Home Science & Higher Education for Women</option>
  <option value="Angappa College of Arts & Science">Angappa College of Arts & Science</option>
  <option value="Ayyan Thiruvalluvar College of Arts & Science">Ayyan Thiruvalluvar College of Arts & Science</option>
  <option value="A.P.A College of Arts & Science">A.P.A College of Arts & Science</option>
  <option value="Alamelu Angappan College">Alamelu Angappan College</option>
  <option value="Bharadhidhasan Arts  & Science College">Bharadhidhasan Arts  & Science College</option>
  <option value="Bharathiar University">Bharathiar University</option>
  <option value="Bishop Ambrose College">Bishop Ambrose College</option>
  <option value="Bishop Thorp College">Bishop Thorp College</option>
  <option value="Bishop Heber College">Bishop Heber College</option>
  <option value="CBM College">CBM College</option>
  <option value="Coimbatore Institute of Technology">Coimbatore Institute of Technology</option>
  <option value="Chikkanna Government Arts College">Chikkanna Government Arts College</option>
  <option value="Chikkaiah Naicker College">Chikkaiah Naicker College</option>
  <option value="CMS College of Science & Commerce">CMS College of Science & Commerce</option>
  <option value="C.S.I. Bishop Appasamy College of Arts &Science">C.S.I. Bishop Appasamy College of Arts &Science</option>
  <option value="Cherran Arts  & Science College">Cherran Arts  & Science College</option>
  <option value="Cauvery College for Women">Cauvery College for Women</option>
  <option value="Dr.G.R.D College of Science">Dr.G.R.D College of Science</option>
  <option value="Dr.G.R. Damodaran Insitute of Management">Dr.G.R. Damodaran Insitute of Management</option>
  <option value="D J Academy for Managerial Excellence">D J Academy for Managerial Excellence</option>
  <option value="Dr.N.G.P. Arts & Science College">Dr.N.G.P. Arts & Science College</option>
  <option value="Erode Arts & Science College">Erode Arts & Science College</option>
  <option value="Gobi Arts & Science College">Gobi Arts & Science College</option>
  <option value="Government Arts College,Udumalpet- 642126.">Government Arts College,Udumalpet- 642126.</option>
  <option value="Government Arts College ,Salem.">Government Arts College ,Salem.</option>
  <option value="Gr.S.N.S.Rajalakshmi College of Arts & Science">Gr.S.N.S.Rajalakshmi College of Arts & Science</option>
  <option value="Government College of Education for Women">Government College of Education for Women</option>
  <option value="Government Arts College,Arts College Road,Coimbatore-641018.">Government Arts College,Arts College Road,Coimbatore-641018.</option>
  <option value="Government Arts College,Karur-639005.">Government Arts College,Karur-639005.</option>
  <option value="Hindusthan College of Arts & Science">Hindusthan College of Arts & Science</option>
  <option value="Hindusthan College of Engineering & Technology">Hindusthan College of Engineering & Technology</option>
  <option value="Institute of Road and Transport Technology">Institute of Road and Transport Technology</option>
  <option value="Jammal Mohamed College">Jammal Mohamed College</option>
  <option value="J.K.K Natraja College of Arts  & Science for Women">J.K.K Natraja College of Arts  & Science for Women</option>
  <option value="JJ College of Engineering  & Technology,Ammapet,">JJ College of Engineering  & Technology,Ammapet,</option>
  <option value="K S R College of  Technology">K S R College of  Technology</option>
  <option value="Kumaraguru College of Technology">Kumaraguru College of Technology</option>
  <option value="KGISL  Institute of Information Management">KGISL  Institute of Information Management</option>
  <option value="Kongu Engineering College">Kongu Engineering College</option>
  <option value="Kandaswami Kandar&apos;s College">Kandaswami Kandar&apos;s College</option>
  <option value="Kairali Arts Science & Commerce College">Kairali Arts Science & Commerce College</option>
  <option value="Karunya Institute of Technology">Karunya Institute of Technology</option>
  <option value="K.S.G.College of Arts & Science">K.S.G.College of Arts & Science</option>
  <option value="Kongu Arts & Science College">Kongu Arts & Science College</option>
  <option value="Kongunadu Arts  & Science College">Kongunadu Arts  & Science College</option>
  <option value="Karpagam College of Engineering">Karpagam College of Engineering</option>
  <option value="K.S.R College of Arts  & Science">K.S.R College of Arts  & Science</option>
  <option value="Kovai Kalaimagal College of Arts and Science">Kovai Kalaimagal College of Arts and Science</option>
  <option value="Karupannan- Mariappan College">Karupannan- Mariappan College</option>
  <option value="Kaamadhenu Arts & Science College">Kaamadhenu Arts & Science College</option>
  <option value="LRG Government Arts College for Women">LRG Government Arts College for Women</option>
  <option value="Lakshmi Narayanan Visalakshi College Arts  & Science for Women">Lakshmi Narayanan Visalakshi College Arts  & Science for Women</option>
  <option value="Lakshmi Narayanan Visalakshi Women&apos;s College">Lakshmi Narayanan Visalakshi Women&apos;s College</option>
  <option value="Maharaja College of Arts & Science">Maharaja College of Arts & Science</option>
  <option value="Maharaja College for Women">Maharaja College for Women</option>
  <option value="Muthayammal College of Arts & Science">Muthayammal College of Arts & Science</option>
  <option value="MGR College (Co-Ed)">MGR College (Co-Ed)</option>
  <option value="Maharaja Engineering College">Maharaja Engineering College</option>
  <option value="Muthayammal Engineering College">Muthayammal Engineering College</option>
  <option value="Maharani Arts & Science Women&apos;s College">Maharani Arts & Science Women&apos;s College</option>
  <option value="Mahendra College of Engineering">Mahendra College of Engineering</option>
  <option value="M.V. Muthiah Govt Art College for Women">M.V. Muthiah Govt Art College for Women</option>
  <option value="Navarasam Arts & Science College for Women">Navarasam Arts & Science College for Women</option>
  <option value="Nandha Arts & Science College">Nandha Arts & Science College</option>
  <option value="Nehru Arts & Science College">Nehru Arts & Science College</option>
  <option value="Nehru College of Arts & Science">Nehru College of Arts & Science</option>
  <option value="National Institute of Technology">National Institute of Technology</option>
  <option value="Nirmala College for Women">Nirmala College for Women</option>
  <option value="Providence College for Women">Providence College for Women</option>
  <option value="Pioneer College of Arts &Science">Pioneer College of Arts &Science</option>
  <option value="P.K.R. Arts College for Women">P.K.R. Arts College for Women</option>
  <option value="Park&apos;s College">Park&apos;s College</option>
  <option value="P.G.P College of Arts  & Science">P.G.P College of Arts  & Science</option>
  <option value="PSGR Krishnammal College">PSGR Krishnammal College</option>
  <option value="P G P College of Arts  & Science">P G P College of Arts  & Science</option>
  <option value="P.S.G College of Arts & Science">P.S.G College of Arts & Science</option>
  <option value="Rathinam College of Arts & Science,">Rathinam College of Arts & Science,</option>
  <option value="R.V .S College of Arts & Science">R.V .S College of Arts & Science</option>
  <option value="Rathinam College of Arts & Science">Rathinam College of Arts & Science</option>
  <option value="Shri Nehru Maha Vidhyalaya College of Arts & Science">Shri Nehru Maha Vidhyalaya College of Arts & Science</option>
  <option value="SNR Sons College">SNR Sons College</option>
  <option value="Sengunthar Arts  & Science College">Sengunthar Arts  & Science College</option>
  <option value="Sree Narayana Guru College">Sree Narayana Guru College</option>
  <option value="Sri Jayendra Saraswathi Maha Vidyalaya College of Arts & Science">Sri Jayendra Saraswathi Maha Vidyalaya College of Arts & Science</option>
  <option value="Sri Vasavi College">Sri Vasavi College</option>
  <option value="Sri Krishna Arts  & Science College">Sri Krishna Arts  & Science College</option>
  <option value="Sri Krishna College of Engineering & Technology">Sri Krishna College of Engineering & Technology</option>
  <option value="Sree Ramu College of Arts & Science">Sree Ramu College of Arts & Science</option>
  <option value="Sankara College of Science & Commerce">Sankara College of Science & Commerce</option>
  <option value="Smt. Indira Gandhi College">Smt. Indira Gandhi College</option>
  <option value="S.M.S College of Arts & Science">S.M.S College of Arts & Science</option>
  <option value="Sri Ramakrishna College of Arts & Science for Women">Sri Ramakrishna College of Arts & Science for Women</option>
  <option value="St. Joseph&apos;s College for Women">St. Joseph&apos;s College for Women</option>
  <option value="ST. Joseph&apos;s College for Women">ST. Joseph&apos;s College for Women</option>
  <option value="Sankara College of Science & Commerce">Sankara College of Science & Commerce</option>
  <option value="Sri Ramalinga Sowdambigai College of Science & Commerce">Sri Ramalinga Sowdambigai College of Science & Commerce</option>
  <option value="Shree Amman Arts & Science College">Shree Amman Arts & Science College</option>
  <option value="Sri Vasavi College">Sri Vasavi College</option>
  <option value="Sri GVG Visalaskhi College for Women">Sri GVG Visalaskhi College for Women</option>
  <option value="Saratha Niketan College of Science">Saratha Niketan College of Science</option>
  <option value="Sasuri College of Engineering">Sasuri College of Engineering</option>
  <option value="Sri Ramakrishna Engineering College">Sri Ramakrishna Engineering College</option>
  <option value="Sree Narayana Guru College of Arts & Science">Sree Narayana Guru College of Arts & Science</option>
  <option value="Sri Ramalinga Sowdambigai College of Science & Commerce">Sri Ramalinga Sowdambigai College of Science & Commerce</option>
  <option value="S.R.K.M Vidyalaya College of  Arts  & Science">S.R.K.M Vidyalaya College of  Arts  & Science</option>
  <option value="Thavathiru Santhalinga Adigalar Arts  Science Tamil College">Thavathiru Santhalinga Adigalar Arts  Science Tamil College</option>
  <option value="Thirupur Kumaran College for Women">Thirupur Kumaran College for Women</option>
  <option value="Texcity Arts & Science College">Texcity Arts & Science College</option>
  <option value="Tamilnadu College of Engineering">Tamilnadu College of Engineering</option>
  <option value="Urumu Dhanalakshmi College">Urumu Dhanalakshmi College</option>
  <option value="Vellakovil Arts & Science College">Vellakovil Arts & Science College</option>
  <option value="Vinayagam Mission K.V. Engg.College">Vinayagam Mission K.V. Engg.College</option>
  <option value="Vellalar College for Women">Vellalar College for Women</option>
  <option value="Vidyasagar College of Arts & Science">Vidyasagar College of Arts & Science</option>
  <option value="Vivekananda College of Arts & Science">Vivekananda College of Arts & Science</option>
  <option value="Vivekanandha College of Engineering for Women">Vivekanandha College of Engineering for Women</option>
  <option value="Vellalar College of Engineering & Technology">Vellalar College of Engineering & Technology</option>
  <option value="Other">Other (Please Specify)</option>
</select>
{customCollegeInputVisible && (
          <input
            type="text"
            placeholder="Enter College Name"
            value={customCollegeName}
            onChange={(e) => setCustomCollegeName(e.target.value)}
          />
        )}
        </div>
        <div className='department'>
          <label>Department Name:</label>
          <select
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          >
            <option value="">Select Department</option>,
             <option value="B.C.A">B.C.A</option>,
             <option value="B.Sc AI& DS">B.Sc AI& DS</option>,
             <option value="B.Sc(Computer Science)">B.Sc(Computer Science)</option>,
             <option value="B.Sc(Computer Technology)">B.Sc(Computer Technology)</option>,
             <option value="B.Sc(Information Technology)">B.Sc(Information Technology)</option>,
             <option value="B.Sc IoT">B.Sc IoT</option>,
             <option value="M.C.A">M.C.A</option>,
              <option value="M.Sc(Computer Science)">M.Sc(Computer Science)</option>,
              <option value="M.Sc(Computer Technology)">M.Sc(Computer Technology)</option>,
               <option value="M.Sc(Information Technology)">M.Sc(Information Technology)</option>,

            {/* Add more department options as needed */}
          </select>
        </div>
        <div className='Event'>
          <label>Event:</label>
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="">Select Event</option>
            <option value="Marketing">Marketing</option>
            <option value="Quiz">Quiz</option>
            <option value="SoftwareContest">Software Contest</option>
            <option value="WebDesign">Web Design</option>
            <option value="WordHunt">Word Hunt</option>
          </select>
        </div>
        {selectedEvent === 'Marketing'? (
          <div className='members'>
            <h3>Member Details (3 Members)</h3>
            {members.map((member, index) => (
              <div key={index} className="member">
                <label>Member {index + 1}:</label>
                <input
                  type="text"
                  placeholder="Register No"
                  value={member.registerNo}
                  onChange={(e) => handleMemberChange(index, 'registerNo', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={member.phoneNumber}
                  onChange={(e) => handleMemberChange(index, 'phoneNumber', e.target.value)}
                />
                {index > 1 && (
                  <button type="button" onClick={() => handleRemoveMember(index)}>
                    Remove Member
                  </button>
                )}
              </div>
            ))}
            {members.length < 3 && (
              <button type="button" onClick={handleAddMember}>
                Add Member
              </button>
            )}
          </div>
        ) : (
          <div className='member'>
            <h3>Member Details (2 Members)</h3>
            {members.map((member, index) => (
              <div key={index} className="member">
                <label>Member {index + 1}:</label>
                <input
                  type="text"
                  placeholder="Register No"
                  value={member.registerNo}
                  onChange={(e) => handleMemberChange(index, 'registerNo', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={member.phoneNumber}
                  onChange={(e) => handleMemberChange(index, 'phoneNumber', e.target.value)}
                />
                {index > 1 && (
                  <button type="button" onClick={() => handleRemoveMember(index)}>
                    Remove Member
                  </button>
                )}
              </div>
            ))}
            {members.length < 2 && (
              <button type="button" onClick={handleAddMember}>
                Add Member
              </button>
            )}
          </div>
        )}
        <div className="buttons">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" onClick={handleShowDetails}>
           <Link to={'/Details'}>Show Details</Link> 
          </button>
          <button type="button" onClick={handleHome}>
          <Link to="/">Home</Link> 
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
