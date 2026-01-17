import React from 'react'

export default function PathSection() {
    return (
        <div>{/* Breadcrumb */}
            <div className="bg-white rounded-lg px-5 py-3 text-sm text-gray-500 mb-6">
                Home / Shop /{" "}
                <span className="text-gray-900 font-medium">
                    Top Cell Phones & Tablets
                </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">
                TOP CELL PHONES & TABLETS
            </h2>
        </div>
    )
}
