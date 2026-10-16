"use client";

import { useState } from "react";

type Step = "service" | "datetime" | "form" | "confirm";

export function BookingDemo() {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });

  const services = [
    { id: "haircut", name: "理发 Haircut", price: "RM 45", duration: "45 min" },
    { id: "facial", name: "面部护理 Facial", price: "RM 88", duration: "60 min" },
    { id: "massage", name: "按摩 Massage", price: "RM 120", duration: "90 min" },
    { id: "nails", name: "美甲 Nails", price: "RM 65", duration: "60 min" },
  ];

  const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep("datetime");
  };

  const handleDateTimeConfirm = () => {
    if (selectedDate && selectedTime) {
      setStep("form");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
  };

  const reset = () => {
    setStep("service");
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setFormData({ name: "", phone: "", notes: "" });
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Demo Banner */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-center text-sm font-semibold text-white shadow-lg">
        演示项目 | DEMO PROJECT
      </div>

      <div className="mx-auto max-w-md px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">预约服务</h1>
          <p className="text-gray-600">Booking Service</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { key: "service", label: "服务" },
              { key: "datetime", label: "时间" },
              { key: "form", label: "信息" },
              { key: "confirm", label: "确认" },
            ].map((s, i) => (
              <div key={s.key} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step === s.key || (step === "confirm" && i < 4)
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    } font-semibold transition`}
                  >
                    {i + 1}
                  </div>
                  <span className="mt-2 text-xs text-gray-600">{s.label}</span>
                </div>
                {i < 3 && (
                  <div
                    className={`h-1 flex-1 ${
                      step === "confirm" || (i === 0 && ["datetime", "form", "confirm"].includes(step)) || (i === 1 && ["form", "confirm"].includes(step))
                        ? "bg-purple-600"
                        : "bg-gray-200"
                    } transition`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          {/* Step 1: Service Selection */}
          {step === "service" && (
            <div className="space-y-4">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">选择服务 Choose Service</h2>
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="w-full rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 text-left transition hover:border-purple-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{service.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-600">{service.price}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Date & Time */}
          {step === "datetime" && (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">选择日期时间 Date & Time</h2>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">日期 Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">时间 Time</label>
                <div className="grid grid-cols-4 gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-xl py-3 text-sm font-medium transition ${
                        selectedTime === time
                          ? "bg-purple-600 text-white"
                          : "border border-gray-200 bg-white text-gray-700 hover:border-purple-300"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep("service")}
                  className="flex-1 rounded-xl bg-gray-100 py-3 font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  返回 Back
                </button>
                <button
                  onClick={handleDateTimeConfirm}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 rounded-xl bg-purple-600 py-3 font-medium text-white transition hover:bg-purple-700 disabled:bg-gray-300"
                >
                  下一步 Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Form */}
          {step === "form" && (
            <form onSubmit={handleSubmit}>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">填写信息 Your Info</h2>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">姓名 Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="请输入姓名 Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm font-medium text-gray-700">电话 Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="+60 XXX XXX XXXX"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">备注 Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="其他要求 Additional requests (optional)"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("datetime")}
                  className="flex-1 rounded-xl bg-gray-100 py-3 font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  返回 Back
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-purple-600 py-3 font-medium text-white transition hover:bg-purple-700"
                >
                  提交 Submit
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirm" && (
            <div className="text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">预约成功！</h2>
              <p className="mb-6 text-gray-600">Booking Confirmed</p>
              <div className="mb-6 space-y-3 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-left">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">服务 Service:</span>
                  <span className="font-semibold text-gray-800">{selectedServiceData?.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">日期 Date:</span>
                  <span className="font-semibold text-gray-800">{selectedDate}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">时间 Time:</span>
                  <span className="font-semibold text-gray-800">{selectedTime}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-600">姓名 Name:</span>
                  <span className="font-semibold text-gray-800">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">电话 Phone:</span>
                  <span className="font-semibold text-gray-800">{formData.phone}</span>
                </div>
              </div>
              <button
                onClick={reset}
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 font-medium text-white transition hover:from-purple-700 hover:to-pink-700"
              >
                返回首页 Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
