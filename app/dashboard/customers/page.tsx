import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Customers'
}

export default async function Page() {
    const customers = await fetchCustomers()
    console.log(customers)

    return <div>
      <ul>
      {customers.map((customer, i) => {
        return <li className="p-2" key={customer.id}>
            <div className="flex gap-2">
              <div className="flex items-center">
                <Image className="rounded-full" width={30} height={30} src={customer.image_url} alt={`customer-avatar-${i}`} />
              </div>
              <div>
                <div>{customer.name}</div>
                <span className="text-gray-400 text-sm">{customer.email}</span>
              </div>
            </div>
          </li>
      })}
      </ul>
    </div>
  }