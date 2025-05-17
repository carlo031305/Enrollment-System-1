export default function Page() {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-1/5 bg-yellow-400 flex flex-col">
          <div className="bg-blue-600 text-center py-6 p-10">
            <div className="w-20 h-20 mx-auto bg-black rounded-full" />
            <h2 className="text-black font-bold mt-4">Welcome,<br />ADMIN</h2>
          </div>
          <div className="mt-4 px-4 text-black space-y-4">
            <p>DASHBOARD</p>
            <p>COURSES</p>
            <p>INSTRUCTORS</p>
            <p>STUDENT RECORDS</p>
            <p>FEES</p>
            <p>ANNOUNCEMENTS</p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="w-4/5 bg-white flex flex-col">
          {/* Header */}
          <div className="bg-yellow-400 text-center py-4">
            <h1 className="text-2xl font-bold text-black">ANNOUNCEMENTS</h1>
          </div>
  
          {/* Announcements Section */}
          <div className="p-4">
            <div className="bg-blue-600 text-white px-4 py-8 rounded-t">
              Recent Announcements
            </div>
            <div className="bg-gray-100 p-7 rounded-b space-y-6">
              {Array(4).fill(0).map((_, index) => (
                <div key={index}>
                  <h2 className="text-gray-800 font-medium">Announcement Title</h2>
                  <p className="text-gray-600 text-sm">Announcement Message</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  