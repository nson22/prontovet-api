import { randomUUID } from "node:crypto"

export class User {
    id?: string
    name: string
    profile: "default" | "admin" | "vet"
    createdAt: Date

    constructor() {
        if(!this.id) this.id = randomUUID()
        this.name = "Unknown"
        this.profile = "default"
        this.createdAt = new Date()
    }
}