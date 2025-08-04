import { Model } from 'mongoose';
import { User } from './user.schema';
import { UpdateUserDto, UserDto } from './user.dto';
import { DocumentService } from 'src/document/document.service';
export declare class UserService {
    private readonly documentService;
    private userModel;
    private readonly logger;
    constructor(documentService: DocumentService, userModel: Model<User>);
    mapClientIdToUserId(fullname: string, email: string, clientId: string): Promise<User>;
    getClientInfoByClientId(clientId: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createUser(userDto: UserDto): Promise<User>;
    getUserById(userId: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(userId: string): Promise<void>;
    deleteAllUsers(): Promise<any>;
    getAllUsers(): Promise<User[]>;
    getSharedWithDocumentsByUserId(userId: string): Promise<import("../document/document.schema").IDocument[]>;
}